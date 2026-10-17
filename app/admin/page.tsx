"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Search, Loader2, LogOut, Download, CheckCircle2 } from "lucide-react";

type Registration = {
  id: string;
  business_name: string;
  contact_name: string;
  phone: string;
  email: string;
  business_type: string;
  postcode_area: string;
  weekly_spend: string;
  created_at: string;
  status: string;
};

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  
  // State for updating a status
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  // Check if password is already saved in this browser
  useEffect(() => {
    const savedPassword = localStorage.getItem("admin_password");
    if (savedPassword) {
      setPassword(savedPassword);
      fetchData(savedPassword);
    }
  }, []);

  const fetchData = async (pwd: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/admin/registrations?password=${pwd}`);
      if (!res.ok) {
        if (res.status === 401) throw new Error("Invalid password");
        throw new Error("Failed to fetch data");
      }
      const json = await res.json();
      setData(json.data);
      setIsAuthenticated(true);
      localStorage.setItem("admin_password", pwd);
    } catch (err: any) {
      setError(err.message);
      setIsAuthenticated(false);
      localStorage.removeItem("admin_password");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(password);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
    setData([]);
    localStorage.removeItem("admin_password");
  };

  // Update status in Supabase
  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/admin/registrations?password=${password}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");

      // Update local state so UI reflects immediately
      setData((prev) =>
        prev.map((row) => (row.id === id ? { ...row, status: newStatus } : row))
      );
    } catch (err) {
      alert("Could not update status. Please try again.");
    } finally {
      setUpdatingId(null);
    }
  };

  // Export current view to CSV
  const exportCSV = () => {
    const headers = [
      "Date", "Business Name", "Contact Name", "Phone", "Email", 
      "Area", "Type", "Spend", "Status"
    ];
    
    const csvData = filteredData.map((row) => [
      format(new Date(row.created_at), "yyyy-MM-dd HH:mm"),
      row.business_name,
      row.contact_name,
      row.phone,
      row.email || "",
      row.postcode_area,
      row.business_type,
      row.weekly_spend || "",
      row.status,
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map((e) =>
        e.map((item) => `"${(item || "").toString().replace(/"/g, '""')}"`).join(",")
      ),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `manuella-registrations-${format(new Date(), "yyyy-MM-dd")}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredData = data.filter((row) => {
    const query = search.toLowerCase();
    return (
      row.business_name?.toLowerCase().includes(query) ||
      row.contact_name?.toLowerCase().includes(query) ||
      row.email?.toLowerCase().includes(query) ||
      row.postcode_area?.toLowerCase().includes(query)
    );
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sage flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-sm border border-navy/10"
        >
          <h1 className="text-xl font-bold text-navy mb-2">Admin Access</h1>
          <p className="text-sm text-navy/60 mb-6">
            Enter your secure password to view registrations.
          </p>

          {error && (
            <div className="mb-4 text-xs text-red-500 bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-navy/15 p-3 text-sm focus:border-cyan focus:outline-none mb-4"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 rounded-full bg-navy text-white font-medium hover:bg-navy-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Checking..." : "Access Dashboard"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sage pb-12">
      {/* Header */}
      <header className="bg-white border-b border-navy/10 sticky top-0 z-10">
        <div className="max-w-[1320px] mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="font-display font-bold text-lg text-navy">
            Manuella Admin
          </h1>
          <button
            onClick={handleLogout}
            className="text-sm text-navy/60 hover:text-red-500 flex items-center gap-1"
          >
            <LogOut className="h-4 w-4" /> Log out
          </button>
        </div>
      </header>

      <main className="max-w-[1320px] mx-auto px-6 mt-8">
        {/* Stats, Search & Export */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-navy">Registrations</h2>
            <p className="text-sm text-navy/60">
              Showing {filteredData.length} of {data.length} leads
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy/40" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-navy/15 pl-9 pr-4 py-2 text-sm focus:border-cyan focus:outline-none"
              />
            </div>
            <button
              onClick={exportCSV}
              className="h-[38px] shrink-0 rounded-full border border-navy/15 bg-white px-4 text-sm font-medium text-navy hover:bg-cream transition-colors flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-navy/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-navy">
              <thead className="bg-cream border-b border-navy/10 text-xs uppercase tracking-wider text-navy/60">
                <tr>
                  <th className="px-6 py-4 font-medium">Date</th>
                  <th className="px-6 py-4 font-medium">Business</th>
                  <th className="px-6 py-4 font-medium">Contact</th>
                  <th className="px-6 py-4 font-medium">Area</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/5">
                {filteredData.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-8 text-center text-navy/50"
                    >
                      No registrations found.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-cream/50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-navy/60">
                        {format(new Date(row.created_at), "dd MMM, HH:mm")}
                      </td>
                      <td className="px-6 py-4 font-medium">
                        {row.business_name}
                      </td>
                      <td className="px-6 py-4">
                        <div>{row.contact_name}</div>
                        <div className="text-xs text-navy/50">{row.phone}</div>
                        {row.email && (
                          <div className="text-xs text-navy/50">{row.email}</div>
                        )}
                      </td>
                      <td className="px-6 py-4">{row.postcode_area}</td>
                      <td className="px-6 py-4">{row.business_type}</td>
                      <td className="px-6 py-4">
                        {/* Interactive Status Selector */}
                        <div className="relative">
                          <select
                            value={row.status}
                            disabled={updatingId === row.id}
                            onChange={(e) =>
                              handleStatusChange(row.id, e.target.value)
                            }
                            className={`appearance-none rounded-full pl-3 pr-8 py-1 text-xs font-medium border-none focus:ring-2 focus:ring-cyan focus:outline-none cursor-pointer transition-colors ${
                              row.status === "new"
                                ? "bg-cyan/15 text-cyan-dark"
                                : row.status === "contacted"
                                ? "bg-amber-100 text-amber-700"
                                : row.status === "registered"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="registered">Registered</option>
                            <option value="rejected">Rejected</option>
                          </select>
                          {/* Custom chevron icon for the select */}
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            {updatingId === row.id ? (
                              <Loader2 className="h-3 w-3 animate-spin text-navy/50" />
                            ) : (
                              <svg className="h-3 w-3 text-current opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
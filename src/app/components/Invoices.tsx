import { useState } from "react";
import { Plus, Search, Filter, Eye, Edit, Trash2, X, Scan } from "lucide-react";
import { toast } from "sonner";
import { useUser } from "../context/UserContext";
import { DocumentScanner } from "./DocumentScanner";

interface Invoice {
  id: string;
  client: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
}

export function Invoices() {
  const { invoices, updateInvoice, deleteInvoice: removeInvoice } = useUser();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showDialog, setShowDialog] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);
  const [formData, setFormData] = useState({
    client: "",
    amount: "",
    dueDate: "",
    status: "pending" as "paid" | "pending" | "overdue",
  });

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch =
      invoice.id.toLowerCase().includes(search.toLowerCase()) ||
      invoice.client.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterStatus === "all" || invoice.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-[#e8f5e6] text-[#2ca01c]";
      case "pending":
        return "bg-[#fff7ed] text-[#ff6900]";
      case "overdue":
        return "bg-[#fee2e2] text-[#dc2626]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleOpenDialog = (invoice?: Invoice) => {
    if (invoice) {
      setEditingInvoice(invoice);
      setFormData({
        client: invoice.client,
        amount: invoice.amount.toString(),
        dueDate: invoice.dueDate,
        status: invoice.status,
      });
    } else {
      setEditingInvoice(null);
      setFormData({ client: "", amount: "", dueDate: "", status: "pending" });
    }
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setEditingInvoice(null);
    setFormData({ client: "", amount: "", dueDate: "", status: "pending" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingInvoice) {
      // Update existing invoice
      updateInvoice(editingInvoice.id, {
        client: formData.client,
        amount: parseFloat(formData.amount),
        dueDate: formData.dueDate,
        status: formData.status,
      });
      toast.success("Invoice updated successfully!");
    }
    handleCloseDialog();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this invoice?")) {
      removeInvoice(id);
      toast.success("Invoice deleted successfully!");
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[30px] font-medium text-[#0a0a0a] mb-2">Invoices</h1>
          <p className="text-[16px] text-[#4a5565]">Manage and track your invoices</p>
        </div>
        <button
          onClick={() => setShowScanner(true)}
          className="flex items-center gap-2 bg-[#2ca01c] text-white px-6 py-3 rounded-[10px] font-medium hover:bg-[#259017] transition-colors"
        >
          <Scan className="w-5 h-5" />
          Scan Document
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#99a1af]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search invoices..."
            className="w-full pl-10 pr-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#99a1af]" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="pl-10 pr-8 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c] appearance-none bg-white"
          >
            <option value="all">All Status</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
      </div>

      <div className="bg-white border border-[#f3f4f6] rounded-[14px] shadow-sm overflow-hidden">
        {filteredInvoices.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-[16px] text-[#4a5565] mb-4">No invoices yet</p>
            <p className="text-[14px] text-[#6a7282]">
              Click "Create New Invoice" to get started
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <tr>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Invoice ID
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Client
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Amount
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Due Date
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Status
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-[#e5e7eb] hover:bg-gray-50">
                  <td className="px-6 py-4 text-[14px] text-[#364153]">{invoice.id}</td>
                  <td className="px-6 py-4 text-[14px] text-[#364153]">{invoice.client}</td>
                  <td className="px-6 py-4 text-[14px] text-[#364153]">
                    ${invoice.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#364153]">{invoice.dueDate}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[12px] font-medium ${getStatusColor(
                        invoice.status
                      )}`}
                    >
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenDialog(invoice)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4 text-[#4a5565]" />
                      </button>
                      <button
                        onClick={() => handleDelete(invoice.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-[#dc2626]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Invoice Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[14px] p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-medium text-[#0a0a0a]">
                {editingInvoice ? "Edit Invoice" : "Create New Invoice"}
              </h2>
              <button
                onClick={handleCloseDialog}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[14px] font-medium text-[#364153] mb-2">
                  Client Name
                </label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  required
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#364153] mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  required
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#364153] mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  required
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#364153] mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as "paid" | "pending" | "overdue",
                    })
                  }
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                >
                  <option value="pending">Pending</option>
                  <option value="paid">Paid</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseDialog}
                  className="flex-1 px-4 py-3 border border-[#d1d5dc] text-[#364153] rounded-[10px] hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-[#2ca01c] text-white rounded-[10px] hover:bg-[#259017] transition-colors"
                >
                  {editingInvoice ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Document Scanner */}
      {showScanner && (
        <DocumentScanner onClose={() => setShowScanner(false)} />
      )}
    </div>
  );
}
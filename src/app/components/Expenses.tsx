import { useState } from "react";
import { Plus, Search, Filter, Edit, Trash2, X, Scan } from "lucide-react";
import { toast } from "sonner";
import { useUser } from "../context/UserContext";
import { DocumentScanner } from "./DocumentScanner";

interface Expense {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: string;
  receipt: boolean;
}

const categories = [
  "Office Supplies",
  "Software",
  "Marketing",
  "Travel",
  "Utilities",
  "Rent",
  "Meals",
];

export function Expenses() {
  const { expenses, updateExpense, deleteExpense: removeExpense } = useUser();
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [showDialog, setShowDialog] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    category: "Office Supplies",
    date: "",
    receipt: false,
  });

  const filteredExpenses = expenses.filter((expense) => {
    const matchesSearch =
      expense.id.toLowerCase().includes(search.toLowerCase()) ||
      expense.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterCategory === "all" || expense.category === filterCategory;
    return matchesSearch && matchesFilter;
  });

  const totalExpenses = filteredExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Office Supplies": "bg-blue-100 text-blue-700",
      "Software": "bg-purple-100 text-purple-700",
      "Marketing": "bg-pink-100 text-pink-700",
      "Travel": "bg-green-100 text-green-700",
      "Utilities": "bg-yellow-100 text-yellow-700",
      "Rent": "bg-red-100 text-red-700",
      "Meals": "bg-orange-100 text-orange-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const handleOpenDialog = (expense?: Expense) => {
    if (expense) {
      setEditingExpense(expense);
      setFormData({
        name: expense.name,
        amount: expense.amount.toString(),
        category: expense.category,
        date: expense.date,
        receipt: expense.receipt,
      });
    } else {
      setEditingExpense(null);
      setFormData({
        name: "",
        amount: "",
        category: "Office Supplies",
        date: "",
        receipt: false,
      });
    }
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setEditingExpense(null);
    setFormData({
      name: "",
      amount: "",
      category: "Office Supplies",
      date: "",
      receipt: false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingExpense) {
      updateExpense(editingExpense.id, {
        name: formData.name,
        amount: parseFloat(formData.amount),
        category: formData.category,
        date: formData.date,
        receipt: formData.receipt,
      });
      toast.success("Expense updated successfully!");
    }
    handleCloseDialog();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      removeExpense(id);
      toast.success("Expense deleted successfully!");
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[30px] font-medium text-[#0a0a0a] mb-2">Expenses</h1>
          <p className="text-[16px] text-[#4a5565]">Track and categorize your expenses</p>
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
            placeholder="Search expenses..."
            className="w-full pl-10 pr-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#99a1af]" />
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="pl-10 pr-8 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c] appearance-none bg-white"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-4 mb-6 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[#4a5565]">
            Showing {filteredExpenses.length} expenses
          </p>
          <p className="text-[16px] font-medium text-[#0a0a0a]">
            Total: <span className="text-[#dc2626]">${totalExpenses.toLocaleString()}</span>
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#f3f4f6] rounded-[14px] shadow-sm overflow-hidden">
        {filteredExpenses.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-[16px] text-[#4a5565] mb-4">No expenses yet</p>
            <p className="text-[14px] text-[#6a7282]">Click "Add Expense" to get started</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <tr>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Expense
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Amount
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Category
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Date
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Receipt
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense) => (
                <tr key={expense.id} className="border-b border-[#e5e7eb] hover:bg-gray-50">
                  <td className="px-6 py-4 text-[14px] text-[#364153]">{expense.name}</td>
                  <td className="px-6 py-4 text-[14px] text-[#dc2626] font-medium">
                    ${expense.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[12px] font-medium ${getCategoryColor(
                        expense.category
                      )}`}
                    >
                      {expense.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#364153]">{expense.date}</td>
                  <td className="px-6 py-4">
                    {expense.receipt ? (
                      <span className="text-[14px] text-[#2ca01c]">✓ Attached</span>
                    ) : (
                      <span className="text-[14px] text-[#6a7282]">No receipt</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenDialog(expense)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4 text-[#4a5565]" />
                      </button>
                      <button
                        onClick={() => handleDelete(expense.id)}
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

      {/* Expense Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[14px] p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-medium text-[#0a0a0a]">
                {editingExpense ? "Edit Expense" : "Add New Expense"}
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
                  Expense Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#364153] mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={formData.receipt}
                    onChange={(e) => setFormData({ ...formData, receipt: e.target.checked })}
                    className="w-5 h-5 rounded border-gray-300 text-[#2ca01c] focus:ring-[#2ca01c]"
                  />
                  <span className="text-[14px] text-[#364153]">Receipt attached</span>
                </label>
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
                  {editingExpense ? "Update" : "Add"}
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
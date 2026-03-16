import { useState } from "react";
import { Search, Calendar, DollarSign, Users, Plus, Edit, Trash2, X, Scan } from "lucide-react";
import { toast } from "sonner";
import { useUser } from "../context/UserContext";
import { DocumentScanner } from "./DocumentScanner";

interface Employee {
  id: string;
  name: string;
  position: string;
  salary: number;
  schedule: string;
  lastPaid: string;
}

export function Payroll() {
  const { employees, updateEmployee, deleteEmployee: removeEmployee } = useUser();
  const [search, setSearch] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    salary: "",
    schedule: "Monthly",
    lastPaid: "",
  });

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.position.toLowerCase().includes(search.toLowerCase())
  );

  const totalMonthlyPayroll = employees.reduce((sum, emp) => sum + emp.salary, 0);
  const totalEmployees = employees.length;

  const handleOpenDialog = (employee?: Employee) => {
    if (employee) {
      setEditingEmployee(employee);
      setFormData({
        name: employee.name,
        position: employee.position,
        salary: employee.salary.toString(),
        schedule: employee.schedule,
        lastPaid: employee.lastPaid,
      });
    } else {
      setEditingEmployee(null);
      setFormData({
        name: "",
        position: "",
        salary: "",
        schedule: "Monthly",
        lastPaid: "",
      });
    }
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setEditingEmployee(null);
    setFormData({
      name: "",
      position: "",
      salary: "",
      schedule: "Monthly",
      lastPaid: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingEmployee) {
      updateEmployee(editingEmployee.id, {
        name: formData.name,
        position: formData.position,
        salary: parseFloat(formData.salary),
        schedule: formData.schedule,
        lastPaid: formData.lastPaid,
      });
      toast.success("Employee updated successfully!");
    }
    handleCloseDialog();
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to remove this employee?")) {
      removeEmployee(id);
      toast.success("Employee removed successfully!");
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[30px] font-medium text-[#0a0a0a] mb-2">Payroll Management</h1>
          <p className="text-[16px] text-[#4a5565]">Manage employee salaries and pay schedules</p>
        </div>
        <button
          onClick={() => setShowScanner(true)}
          className="flex items-center gap-2 bg-[#2ca01c] text-white px-6 py-3 rounded-[10px] font-medium hover:bg-[#259017] transition-colors"
        >
          <Scan className="w-5 h-5" />
          Scan Document
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <div className="w-12 h-12 bg-[#e8f5e6] rounded-[10px] flex items-center justify-center mb-4">
            <DollarSign className="w-6 h-6 text-[#2ca01c]" />
          </div>
          <p className="text-[14px] font-medium text-[#4a5565] mb-2">Total Monthly Payroll</p>
          <p className="text-[30px] font-medium text-[#0a0a0a]">
            ${totalMonthlyPayroll.toLocaleString()}
          </p>
        </div>

        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <div className="w-12 h-12 bg-[#eff6ff] rounded-[10px] flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-[#2b7fff]" />
          </div>
          <p className="text-[14px] font-medium text-[#4a5565] mb-2">Total Employees</p>
          <p className="text-[30px] font-medium text-[#0a0a0a]">{totalEmployees}</p>
        </div>

        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <div className="w-12 h-12 bg-[#fff7ed] rounded-[10px] flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-[#ff6900]" />
          </div>
          <p className="text-[14px] font-medium text-[#4a5565] mb-2">Next Pay Date</p>
          <p className="text-[30px] font-medium text-[#0a0a0a]">Apr 1, 2026</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#99a1af]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search employees..."
            className="w-full pl-10 pr-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
          />
        </div>
      </div>

      <div className="bg-white border border-[#f3f4f6] rounded-[14px] shadow-sm">
        <div className="px-6 py-4 border-b border-[#e5e7eb]">
          <h2 className="text-[20px] font-medium text-[#0a0a0a]">Employees</h2>
        </div>
        {filteredEmployees.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-[16px] text-[#4a5565] mb-4">No employees yet</p>
            <p className="text-[14px] text-[#6a7282]">Click "Add Employee" to get started</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
              <tr>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">Name</th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Position
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Salary
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Pay Schedule
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Last Paid
                </th>
                <th className="text-left px-6 py-4 text-[14px] font-bold text-[#4a5565]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="border-b border-[#e5e7eb] hover:bg-gray-50">
                  <td className="px-6 py-4 text-[14px] text-[#364153] font-medium">
                    {employee.name}
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#4a5565]">{employee.position}</td>
                  <td className="px-6 py-4 text-[14px] text-[#364153] font-medium">
                    ${employee.salary.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-[12px] font-medium">
                      {employee.schedule}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[14px] text-[#4a5565]">{employee.lastPaid}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenDialog(employee)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Edit className="w-4 h-4 text-[#4a5565]" />
                      </button>
                      <button
                        onClick={() => handleDelete(employee.id)}
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

      {/* Employee Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[14px] p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[24px] font-medium text-[#0a0a0a]">
                {editingEmployee ? "Edit Employee" : "Add New Employee"}
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
                  Full Name
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
                  Position
                </label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  required
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#364153] mb-2">
                  Salary (Monthly)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  required
                />
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#364153] mb-2">
                  Pay Schedule
                </label>
                <select
                  value={formData.schedule}
                  onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Bi-weekly">Bi-weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[#364153] mb-2">
                  Last Paid Date
                </label>
                <input
                  type="date"
                  value={formData.lastPaid}
                  onChange={(e) => setFormData({ ...formData, lastPaid: e.target.value })}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  required
                />
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
                  {editingEmployee ? "Update" : "Add"}
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
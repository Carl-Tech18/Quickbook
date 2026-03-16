import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Download, TrendingUp, FileText } from "lucide-react";
import { toast } from "sonner";

const revenueData = [
  { month: "Jan", revenue: 0, expenses: 0 },
  { month: "Feb", revenue: 0, expenses: 0 },
  { month: "Mar", revenue: 0, expenses: 0 },
  { month: "Apr", revenue: 0, expenses: 0 },
  { month: "May", revenue: 0, expenses: 0 },
  { month: "Jun", revenue: 0, expenses: 0 },
];

const categoryData = [
  { name: "Software", value: 0, color: "#8b5cf6" },
  { name: "Marketing", value: 0, color: "#ec4899" },
  { name: "Office", value: 0, color: "#3b82f6" },
  { name: "Travel", value: 0, color: "#10b981" },
  { name: "Utilities", value: 0, color: "#f59e0b" },
];

const profitData = [
  { month: "Jan", profit: 0 },
  { month: "Feb", profit: 0 },
  { month: "Mar", profit: 0 },
  { month: "Apr", profit: 0 },
  { month: "May", profit: 0 },
  { month: "Jun", profit: 0 },
];

export function Reports() {
  const handleExportReports = () => {
    // Simulate export functionality
    toast.success("Reports exported successfully!");
    
    // In a real application, this would generate a PDF or CSV file
    const dataStr = JSON.stringify({
      revenue: revenueData,
      categories: categoryData,
      profit: profitData,
      exportDate: new Date().toISOString(),
    }, null, 2);
    
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `financial-report-${new Date().toISOString().split("T")[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[30px] font-medium text-[#0a0a0a] mb-2">Reports</h1>
          <p className="text-[16px] text-[#4a5565]">Analyze your financial performance</p>
        </div>
        <button
          onClick={handleExportReports}
          className="flex items-center gap-2 bg-[#2ca01c] text-white px-6 py-3 rounded-[10px] font-medium hover:bg-[#259017] transition-colors"
        >
          <Download className="w-5 h-5" />
          Export Reports
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-[#2ca01c]" />
            <h3 className="text-[16px] font-medium text-[#0a0a0a]">Total Revenue</h3>
          </div>
          <p className="text-[24px] font-medium text-[#0a0a0a]">$0</p>
          <p className="text-[12px] text-[#6a7282] mt-1">Last 6 months</p>
        </div>

        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-[#ff6900]" />
            <h3 className="text-[16px] font-medium text-[#0a0a0a]">Total Expenses</h3>
          </div>
          <p className="text-[24px] font-medium text-[#0a0a0a]">$0</p>
          <p className="text-[12px] text-[#6a7282] mt-1">Last 6 months</p>
        </div>

        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-[#2b7fff]" />
            <h3 className="text-[16px] font-medium text-[#0a0a0a]">Net Profit</h3>
          </div>
          <p className="text-[24px] font-medium text-[#0a0a0a]">$0</p>
          <p className="text-[12px] text-[#6a7282] mt-1">Last 6 months</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <h2 className="text-[20px] font-medium text-[#0a0a0a] mb-6">Revenue vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888888" style={{ fontSize: "12px" }} />
              <YAxis
                stroke="#888888"
                style={{ fontSize: "12px" }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
                formatter={(value: number) => `$${value.toLocaleString()}`}
              />
              <Legend />
              <Bar dataKey="revenue" fill="#2ca01c" name="Revenue" />
              <Bar dataKey="expenses" fill="#ff6900" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <h2 className="text-[20px] font-medium text-[#0a0a0a] mb-6">Expenses by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  percent > 0 ? `${name} ${(percent * 100).toFixed(0)}%` : ""
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
        <h2 className="text-[20px] font-medium text-[#0a0a0a] mb-6">Profit Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={profitData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#888888" style={{ fontSize: "12px" }} />
            <YAxis
              stroke="#888888"
              style={{ fontSize: "12px" }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#2b7fff"
              strokeWidth={3}
              dot={{ fill: "#2b7fff", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

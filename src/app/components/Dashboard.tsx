import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, Receipt, Scan } from "lucide-react";
import { useUser } from "../context/UserContext";
import { DocumentScanner } from "./DocumentScanner";

type Period = "week" | "month" | "year";

export function Dashboard() {
  const [period, setPeriod] = useState<Period>("month");
  const [showScanner, setShowScanner] = useState(false);
  const { user, invoices, expenses, employees } = useUser();

  // Calculate revenue from paid invoices
  const calculateRevenue = (periodType: Period) => {
    const now = new Date();
    return invoices
      .filter((inv) => {
        const invoiceDate = new Date(inv.dueDate);
        if (inv.status !== "paid") return false;

        switch (periodType) {
          case "week": {
            const weekStart = new Date(now);
            weekStart.setDate(now.getDate() - now.getDay());
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);
            return invoiceDate >= weekStart && invoiceDate <= weekEnd;
          }
          case "month": {
            return (
              invoiceDate.getMonth() === now.getMonth() &&
              invoiceDate.getFullYear() === now.getFullYear()
            );
          }
          case "year": {
            return invoiceDate.getFullYear() === now.getFullYear();
          }
        }
      })
      .reduce((sum, inv) => sum + inv.amount, 0);
  };

  // Calculate expenses
  const calculateExpenses = (periodType: Period) => {
    const now = new Date();
    return expenses
      .filter((exp) => {
        const expenseDate = new Date(exp.date);

        switch (periodType) {
          case "week": {
            const weekStart = new Date(now);
            weekStart.setDate(now.getDate() - now.getDay());
            const weekEnd = new Date(weekStart);
            weekEnd.setDate(weekStart.getDate() + 6);
            return expenseDate >= weekStart && expenseDate <= weekEnd;
          }
          case "month": {
            return (
              expenseDate.getMonth() === now.getMonth() &&
              expenseDate.getFullYear() === now.getFullYear()
            );
          }
          case "year": {
            return expenseDate.getFullYear() === now.getFullYear();
          }
        }
      })
      .reduce((sum, exp) => sum + exp.amount, 0);
  };

  // Calculate payroll expenses
  const calculatePayrollExpenses = (periodType: Period) => {
    const totalMonthlyPayroll = employees.reduce((sum, emp) => sum + emp.salary, 0);

    switch (periodType) {
      case "week":
        return totalMonthlyPayroll / 4; // Approximate weekly
      case "month":
        return totalMonthlyPayroll;
      case "year":
        return totalMonthlyPayroll * 12;
    }
  };

  // Generate cash flow data for chart
  const generateCashFlowData = () => {
    const now = new Date();

    switch (period) {
      case "week": {
        const data = [];
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());

        for (let i = 0; i < 7; i++) {
          const currentDay = new Date(weekStart);
          currentDay.setDate(weekStart.getDate() + i);

          const dailyRevenue = invoices
            .filter((inv) => {
              const invDate = new Date(inv.dueDate);
              return (
                inv.status === "paid" &&
                invDate.toDateString() === currentDay.toDateString()
              );
            })
            .reduce((sum, inv) => sum + inv.amount, 0);

          const dailyExpenses = expenses
            .filter((exp) => {
              const expDate = new Date(exp.date);
              return expDate.toDateString() === currentDay.toDateString();
            })
            .reduce((sum, exp) => sum + exp.amount, 0);

          data.push({
            name: days[i],
            value: dailyRevenue - dailyExpenses,
          });
        }
        return data;
      }

      case "month": {
        const data = [];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        for (let i = 0; i < 12; i++) {
          const monthRevenue = invoices
            .filter((inv) => {
              const invDate = new Date(inv.dueDate);
              return (
                inv.status === "paid" &&
                invDate.getMonth() === i &&
                invDate.getFullYear() === now.getFullYear()
              );
            })
            .reduce((sum, inv) => sum + inv.amount, 0);

          const monthExpenses = expenses
            .filter((exp) => {
              const expDate = new Date(exp.date);
              return (
                expDate.getMonth() === i &&
                expDate.getFullYear() === now.getFullYear()
              );
            })
            .reduce((sum, exp) => sum + exp.amount, 0);

          data.push({
            name: months[i],
            value: monthRevenue - monthExpenses,
          });
        }
        return data;
      }

      case "year": {
        const data = [];
        const years = [2022, 2023, 2024, 2025, 2026];

        for (const year of years) {
          const yearRevenue = invoices
            .filter((inv) => {
              const invDate = new Date(inv.dueDate);
              return inv.status === "paid" && invDate.getFullYear() === year;
            })
            .reduce((sum, inv) => sum + inv.amount, 0);

          const yearExpenses = expenses
            .filter((exp) => {
              const expDate = new Date(exp.date);
              return expDate.getFullYear() === year;
            })
            .reduce((sum, exp) => sum + exp.amount, 0);

          data.push({
            name: String(year),
            value: yearRevenue - yearExpenses,
          });
        }
        return data;
      }
    }
  };

  const revenue = calculateRevenue(period);
  const expensesTotal = calculateExpenses(period) + calculatePayrollExpenses(period);
  const profit = revenue - expensesTotal;

  const getCashFlowData = () => {
    return generateCashFlowData();
  };

  // Simple percentage change calculation (0 for now, can be enhanced)
  const metrics = {
    revenue,
    revenueChange: 0,
    expenses: expensesTotal,
    expensesChange: 0,
    profit,
    profitChange: 0,
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[30px] font-medium text-[#0a0a0a] mb-2">Dashboard</h1>
          <p className="text-[16px] text-[#4a5565]">
            Welcome back{user ? `, ${user.firstName}` : ""}! Here's your financial overview.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <button
            onClick={() => setShowScanner(true)}
            className="flex items-center gap-2 bg-[#2ca01c] text-white px-6 py-3 rounded-[10px] font-medium hover:bg-[#259017] transition-colors"
          >
            <Scan className="w-5 h-5" />
            Scan Document
          </button>

          <div className="flex gap-2 bg-white p-1 rounded-[10px] border border-[#e5e7eb] shadow-sm">
            <button
              onClick={() => setPeriod("week")}
              className={`px-4 py-2 rounded-[8px] text-[14px] font-medium transition-colors ${
                period === "week"
                  ? "bg-[#2ca01c] text-white shadow-sm"
                  : "text-[#4a5565] hover:bg-gray-50"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setPeriod("month")}
              className={`px-4 py-2 rounded-[8px] text-[14px] font-medium transition-colors ${
                period === "month"
                  ? "bg-[#2ca01c] text-white shadow-sm"
                  : "text-[#4a5565] hover:bg-gray-50"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setPeriod("year")}
              className={`px-4 py-2 rounded-[8px] text-[14px] font-medium transition-colors ${
                period === "year"
                  ? "bg-[#2ca01c] text-white shadow-sm"
                  : "text-[#4a5565] hover:bg-gray-50"
              }`}
            >
              Year
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#e8f5e6] rounded-[10px] flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-[#2ca01c]" />
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-[#00a63e]" />
              <span className="text-[14px] font-medium text-[#00a63e]">
                {metrics.revenueChange}%
              </span>
            </div>
          </div>
          <p className="text-[14px] font-medium text-[#4a5565] mb-2">Total Revenue</p>
          <p className="text-[30px] font-medium text-[#0a0a0a] mb-1">
            ${metrics.revenue.toLocaleString()}
          </p>
          <p className="text-[12px] font-medium text-[#6a7282]">
            This {period}
          </p>
        </div>

        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#fff7ed] rounded-[10px] flex items-center justify-center">
              <Receipt className="w-6 h-6 text-[#ff6900]" />
            </div>
            <div className="flex items-center gap-1">
              {metrics.expensesChange > 0 ? (
                <>
                  <TrendingUp className="w-4 h-4 text-[#e7000b]" />
                  <span className="text-[14px] font-medium text-[#e7000b]">
                    {metrics.expensesChange}%
                  </span>
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-[#00a63e]" />
                  <span className="text-[14px] font-medium text-[#00a63e]">
                    {Math.abs(metrics.expensesChange)}%
                  </span>
                </>
              )}
            </div>
          </div>
          <p className="text-[14px] font-medium text-[#4a5565] mb-2">Total Expenses</p>
          <p className="text-[30px] font-medium text-[#0a0a0a] mb-1">
            ${metrics.expenses.toLocaleString()}
          </p>
          <p className="text-[12px] font-medium text-[#6a7282]">
            This {period}
          </p>
        </div>

        <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#eff6ff] rounded-[10px] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#2b7fff]" />
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-[#00a63e]" />
              <span className="text-[14px] font-medium text-[#00a63e]">
                {metrics.profitChange}%
              </span>
            </div>
          </div>
          <p className="text-[14px] font-medium text-[#4a5565] mb-2">Net Profit</p>
          <p className="text-[30px] font-medium text-[#0a0a0a] mb-1">
            ${metrics.profit.toLocaleString()}
          </p>
          <p className="text-[12px] font-medium text-[#6a7282]">
            This {period}
          </p>
        </div>
      </div>

      <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm">
        <h2 className="text-[20px] font-medium text-[#0a0a0a] mb-6">Cash Flow</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={getCashFlowData()}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f5deb8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#f5deb8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              stroke="#888888"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="#888888"
              style={{ fontSize: "12px" }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, "Cash Flow"]}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#ff8c00"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {showScanner && <DocumentScanner onClose={() => setShowScanner(false)} />}
    </div>
  );
}
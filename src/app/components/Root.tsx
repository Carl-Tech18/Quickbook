import { Outlet, NavLink } from "react-router";
import svgPaths from "../../imports/svg-o98whuzqsn";
import { useUser } from "../context/UserContext";

export function Root() {
  const { user } = useUser();
  
  // Get initials from user name
  const getInitials = () => {
    if (!user) return "??";
    return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
  };

  const getFullName = () => {
    if (!user) return "User";
    return `${user.firstName} ${user.lastName}`;
  };

  return (
    <div className="bg-white flex h-screen">
      <aside className="bg-white w-64 border-r border-[#e5e7eb] flex flex-col">
        <div className="p-6 border-b border-[#e5e7eb]">
          <h1 className="text-[24px] font-medium text-[#2ca01c]">QuickBooks</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <NavLink
            to="/app"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-[10px] transition-colors ${
                isActive
                  ? "bg-[#2ca01c] text-white"
                  : "text-[#364153] hover:bg-gray-100"
              }`
            }
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1fc96a00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p33089d00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p49cfa80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p1cfbf300} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/app/invoices"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-[10px] transition-colors ${
                isActive
                  ? "bg-[#2ca01c] text-white"
                  : "text-[#364153] hover:bg-gray-100"
              }`
            }
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3713e00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.pd2076c0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M8.33333 7.5H6.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M13.3333 10.8333H6.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M13.3333 14.1667H6.66667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span>Invoices</span>
          </NavLink>

          <NavLink
            to="/app/expenses"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-[10px] transition-colors ${
                isActive
                  ? "bg-[#2ca01c] text-white"
                  : "text-[#364153] hover:bg-gray-100"
              }`
            }
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1cf7de80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p3ebe9ac0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M10 14.5833V5.41667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span>Expenses</span>
          </NavLink>

          <NavLink
            to="/app/payroll"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-[10px] transition-colors ${
                isActive
                  ? "bg-[#2ca01c] text-white"
                  : "text-[#364153] hover:bg-gray-100"
              }`
            }
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p25397b80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p2c4f400} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p2241fff0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.pae3c380} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span>Payroll</span>
          </NavLink>

          <NavLink
            to="/app/reports"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-[10px] transition-colors ${
                isActive
                  ? "bg-[#2ca01c] text-white"
                  : "text-[#364153] hover:bg-gray-100"
              }`
            }
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p140c1100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M15 14.1667V7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M10.8333 14.1667V4.16667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M6.66667 14.1667V11.6667" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span>Reports</span>
          </NavLink>

          <NavLink
            to="/app/integrations"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-[10px] transition-colors ${
                isActive
                  ? "bg-[#2ca01c] text-white"
                  : "text-[#364153] hover:bg-gray-100"
              }`
            }
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1cec7ff0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M2.5 7.5H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M2.5 12.5H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M7.5 2.5V17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M12.5 2.5V17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span>Integrations</span>
          </NavLink>

          <NavLink
            to="/app/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-[10px] transition-colors ${
                isActive
                  ? "bg-[#2ca01c] text-white"
                  : "text-[#364153] hover:bg-gray-100"
              }`
            }
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
              <path d={svgPaths.ped54800} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d={svgPaths.p3b27f100} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
            <span>Settings</span>
          </NavLink>
        </nav>

        <div className="p-4 border-t border-[#e5e7eb]">
          <div className="flex items-center gap-3 px-4">
            <div className="w-10 h-10 rounded-full bg-[#2ca01c] flex items-center justify-center text-white font-medium">
              {getInitials()}
            </div>
            <div className="flex-1">
              <p className="text-[14px] text-[#0a0a0a] font-medium">{getFullName()}</p>
              <p className="text-[12px] text-[#6a7282]">{user?.email || ""}</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-[#f9fafb] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
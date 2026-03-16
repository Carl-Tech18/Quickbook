import { useState } from "react";
import { Link, useNavigate } from "react-router";
import imgImageWithFallback from "figma:asset/fdeac2fcae5f758763cbd506ab5630f07fbffbbb.png";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/app");
  };

  return (
    <div className="bg-white content-stretch flex items-start relative size-full">
      <div className="flex-1 flex items-center justify-center bg-white min-h-screen">
        <div className="w-full max-w-md px-8">
          <div className="mb-8">
            <h1 className="text-[36px] font-medium text-[#2ca01c] mb-2">QuickBooks</h1>
            <p className="text-[16px] text-[#4a5565]">Sign in to manage your finances</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-[14px] font-medium text-[#364153] mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:border-[#2ca01c]"
                placeholder=""
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-[14px] font-medium text-[#364153] mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:border-[#2ca01c]"
                placeholder=""
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <Link
                to="/forgot-password"
                className="text-[14px] text-[#2ca01c] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2ca01c] text-white py-3 rounded-[10px] font-medium text-[16px] hover:bg-[#259017] transition-colors"
            >
              Sign In
            </button>

            <div className="text-center">
              <Link to="/create-account" className="text-[14px] text-[#2ca01c] hover:underline">
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-[#f0fff0] min-h-screen p-8">
        <div className="w-full max-w-lg">
          <img
            src={imgImageWithFallback}
            alt="Financial Dashboard"
            className="w-full rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] mb-8"
          />
          <div className="text-center">
            <h2 className="text-[24px] font-medium text-[#1e2939] mb-2">
              Manage Your Finances
            </h2>
            <p className="text-[16px] text-[#4a5565]">
              Track revenue, expenses, and payroll all in one place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import imgImageWithFallback from "figma:asset/fdeac2fcae5f758763cbd506ab5630f07fbffbbb.png";
import { useUser } from "../context/UserContext";

export function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Save user data to context
    setUser({
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      email: formData.email,
    });
    navigate("/app");
  };

  return (
    <div className="bg-white content-stretch flex items-start relative size-full">
      <div className="flex-1 flex items-center justify-center bg-white min-h-screen py-8">
        <div className="w-full max-w-md px-8">
          <div className="mb-8">
            <h1 className="text-[36px] font-medium text-[#2ca01c] mb-2">QuickBooks</h1>
            <p className="text-[16px] text-[#4a5565]">Create your account</p>
          </div>

          <Link to="/" className="flex items-center gap-2 text-[14px] font-medium text-[#4a5565] mb-6 hover:text-[#2ca01c]">
            <span>←</span> Back to Sign In
          </Link>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-[14px] font-medium text-[#364153] mb-2">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:border-[#2ca01c]"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[14px] font-medium text-[#364153] mb-2">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:border-[#2ca01c]"
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-[14px] font-medium text-[#364153] mb-2">
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:border-[#2ca01c]"
                placeholder=""
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[14px] font-medium text-[#364153] mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:border-[#2ca01c]"
                placeholder=""
                required
              />
              <p className="text-[12px] text-[#6a7282] mt-2">At least 8 characters</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-[14px] font-medium text-[#364153] mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] text-[16px] focus:outline-none focus:border-[#2ca01c]"
                placeholder=""
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2ca01c] text-white py-3 rounded-[10px] font-medium text-[16px] hover:bg-[#259017] transition-colors"
            >
              Create Account
            </button>

            <p className="text-[12px] text-[#6a7282] text-center">
              By creating an account, you agree to our Terms of Service and Privacy Policy
            </p>
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
              Join Thousands of Businesses
            </h2>
            <p className="text-[16px] text-[#4a5565]">
              Start tracking your revenue, expenses, and payroll today
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
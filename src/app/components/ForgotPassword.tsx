import { useState } from "react";
import { Link } from "react-router";
import imgImageWithFallback from "figma:asset/fdeac2fcae5f758763cbd506ab5630f07fbffbbb.png";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white content-stretch flex items-start relative size-full">
      <div className="flex-1 flex items-center justify-center bg-white min-h-screen">
        <div className="w-full max-w-md px-8">
          <div className="mb-8">
            <h1 className="text-[36px] font-medium text-[#2ca01c] mb-2">QuickBooks</h1>
            <p className="text-[16px] text-[#4a5565]">Reset your password</p>
          </div>

          {submitted ? (
            <div className="space-y-6">
              <div className="bg-[#e8f5e6] border border-[#2ca01c] rounded-[10px] p-4">
                <p className="text-[14px] text-[#364153]">
                  We've sent a password reset link to <strong>{email}</strong>. Please check your email.
                </p>
              </div>
              <Link
                to="/"
                className="block w-full bg-[#2ca01c] text-white py-3 rounded-[10px] font-medium text-[16px] hover:bg-[#259017] transition-colors text-center"
              >
                Back to Sign In
              </Link>
            </div>
          ) : (
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

              <p className="text-[12px] text-[#6a7282]">
                Enter your email address and we'll send you a link to reset your password.
              </p>

              <button
                type="submit"
                className="w-full bg-[#2ca01c] text-white py-3 rounded-[10px] font-medium text-[16px] hover:bg-[#259017] transition-colors"
              >
                Send Reset Link
              </button>

              <div className="text-center">
                <Link to="/" className="text-[14px] text-[#2ca01c] hover:underline">
                  Back to Sign In
                </Link>
              </div>
            </form>
          )}
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
              Secure Account Recovery
            </h2>
            <p className="text-[16px] text-[#4a5565]">
              We'll help you get back to managing your finances
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from "react";
import { User, Building2, Bell, Lock, CreditCard, LogOut, Eye, EyeOff } from "lucide-react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function Settings() {
  const { user, clearUser } = useUser();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);

  const [profileData, setProfileData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "",
  });

  const [companyData, setCompanyData] = useState({
    name: user?.companyName || "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "password123", // Simulated current password
    newPassword: "",
    confirmPassword: "",
  });

  const [notifications, setNotifications] = useState({
    emailInvoices: true,
    emailExpenses: false,
    emailPayroll: true,
    pushInvoices: true,
    pushExpenses: true,
    pushPayroll: false,
  });

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "company", label: "Company", icon: Building2 },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "billing", label: "Billing", icon: CreditCard },
  ];

  const handleSaveProfile = () => {
    toast.success("Profile settings saved successfully!");
  };

  const handleSaveCompany = () => {
    toast.success("Company information saved successfully!");
  };

  const handleSaveNotifications = () => {
    toast.success("Notification preferences saved successfully!");
  };

  const handleUpdatePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }
    if (passwordData.newPassword.length < 8) {
      toast.error("Password must be at least 8 characters!");
      return;
    }
    toast.success("Password updated successfully!");
    setPasswordData({
      currentPassword: passwordData.newPassword,
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleCancelSubscription = () => {
    if (
      confirm(
        "Are you sure you want to cancel your subscription? You will lose access to all premium features."
      )
    ) {
      toast.success("Subscription cancelled. You'll retain access until the end of your billing period.");
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-[30px] font-medium text-[#0a0a0a] mb-2">Settings</h1>
        <p className="text-[16px] text-[#4a5565]">Manage your account and preferences</p>
      </div>

      <div className="flex gap-6">
        <div className="w-64 bg-white border border-[#f3f4f6] rounded-[14px] p-4 shadow-sm h-fit">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-[8px] text-left transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#2ca01c] text-white"
                      : "text-[#364153] hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="mt-6 pt-6 border-t border-[#e5e7eb]">
            <button
              onClick={() => {
                clearUser();
                navigate("/");
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-[8px] text-left text-[#dc2626] hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white border border-[#f3f4f6] rounded-[14px] p-8 shadow-sm">
          {activeTab === "profile" && (
            <div>
              <h2 className="text-[24px] font-medium text-[#0a0a0a] mb-6">Profile Settings</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-medium text-[#364153] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) =>
                        setProfileData({ ...profileData, firstName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-[#364153] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) =>
                        setProfileData({ ...profileData, lastName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#364153] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) =>
                      setProfileData({ ...profileData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#364153] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) =>
                      setProfileData({ ...profileData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  />
                </div>
                <button
                  onClick={handleSaveProfile}
                  className="bg-[#2ca01c] text-white px-6 py-3 rounded-[10px] font-medium hover:bg-[#259017] transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "company" && (
            <div>
              <h2 className="text-[24px] font-medium text-[#0a0a0a] mb-6">Company Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-[14px] font-medium text-[#364153] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={companyData.name}
                    onChange={(e) => setCompanyData({ ...companyData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#364153] mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    value={companyData.address}
                    onChange={(e) =>
                      setCompanyData({ ...companyData, address: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[14px] font-medium text-[#364153] mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      value={companyData.city}
                      onChange={(e) =>
                        setCompanyData({ ...companyData, city: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-[#364153] mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      value={companyData.state}
                      onChange={(e) =>
                        setCompanyData({ ...companyData, state: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-medium text-[#364153] mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      value={companyData.zip}
                      onChange={(e) => setCompanyData({ ...companyData, zip: e.target.value })}
                      className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                    />
                  </div>
                </div>
                <button
                  onClick={handleSaveCompany}
                  className="bg-[#2ca01c] text-white px-6 py-3 rounded-[10px] font-medium hover:bg-[#259017] transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div>
              <h2 className="text-[24px] font-medium text-[#0a0a0a] mb-6">
                Notification Preferences
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-[18px] font-medium text-[#0a0a0a] mb-4">
                    Email Notifications
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={notifications.emailInvoices}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            emailInvoices: e.target.checked,
                          })
                        }
                        className="w-5 h-5 rounded border-gray-300 text-[#2ca01c] focus:ring-[#2ca01c]"
                      />
                      <span className="text-[14px] text-[#364153]">Invoice updates</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={notifications.emailExpenses}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            emailExpenses: e.target.checked,
                          })
                        }
                        className="w-5 h-5 rounded border-gray-300 text-[#2ca01c] focus:ring-[#2ca01c]"
                      />
                      <span className="text-[14px] text-[#364153]">Expense alerts</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={notifications.emailPayroll}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            emailPayroll: e.target.checked,
                          })
                        }
                        className="w-5 h-5 rounded border-gray-300 text-[#2ca01c] focus:ring-[#2ca01c]"
                      />
                      <span className="text-[14px] text-[#364153]">Payroll reminders</span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-[#0a0a0a] mb-4">
                    Push Notifications
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={notifications.pushInvoices}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            pushInvoices: e.target.checked,
                          })
                        }
                        className="w-5 h-5 rounded border-gray-300 text-[#2ca01c] focus:ring-[#2ca01c]"
                      />
                      <span className="text-[14px] text-[#364153]">Invoice updates</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={notifications.pushExpenses}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            pushExpenses: e.target.checked,
                          })
                        }
                        className="w-5 h-5 rounded border-gray-300 text-[#2ca01c] focus:ring-[#2ca01c]"
                      />
                      <span className="text-[14px] text-[#364153]">Expense alerts</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={notifications.pushPayroll}
                        onChange={(e) =>
                          setNotifications({
                            ...notifications,
                            pushPayroll: e.target.checked,
                          })
                        }
                        className="w-5 h-5 rounded border-gray-300 text-[#2ca01c] focus:ring-[#2ca01c]"
                      />
                      <span className="text-[14px] text-[#364153]">Payroll reminders</span>
                    </label>
                  </div>
                </div>
                <button
                  onClick={handleSaveNotifications}
                  className="bg-[#2ca01c] text-white px-6 py-3 rounded-[10px] font-medium hover:bg-[#259017] transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div>
              <h2 className="text-[24px] font-medium text-[#0a0a0a] mb-6">Security Settings</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-[14px] font-medium text-[#364153] mb-2">
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={passwordData.currentPassword}
                      readOnly
                      className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c] bg-gray-50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6a7282] hover:text-[#364153]"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#364153] mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({ ...passwordData, newPassword: e.target.value })
                    }
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-medium text-[#364153] mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                    }
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-[#d1d5dc] rounded-[10px] focus:outline-none focus:border-[#2ca01c]"
                  />
                </div>
                <button
                  onClick={handleUpdatePassword}
                  className="bg-[#2ca01c] text-white px-6 py-3 rounded-[10px] font-medium hover:bg-[#259017] transition-colors"
                >
                  Update Password
                </button>
                <div className="pt-6 border-t border-[#e5e7eb]">
                  <h3 className="text-[18px] font-medium text-[#0a0a0a] mb-4">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-[14px] text-[#4a5565] mb-4">
                    Add an extra layer of security to your account
                  </p>
                  <button
                    onClick={() => toast.info("Two-factor authentication setup coming soon!")}
                    className="border border-[#2ca01c] text-[#2ca01c] px-6 py-3 rounded-[10px] font-medium hover:bg-[#e8f5e6] transition-colors"
                  >
                    Enable 2FA
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "billing" && (
            <div>
              <h2 className="text-[24px] font-medium text-[#0a0a0a] mb-6">Billing Information</h2>
              <div className="space-y-6">
                <div className="bg-[#f9fafb] border border-[#e5e7eb] rounded-[10px] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-[18px] font-medium text-[#0a0a0a]">
                        Professional Plan
                      </h3>
                      <p className="text-[14px] text-[#4a5565]">$49/month</p>
                    </div>
                    <span className="px-3 py-1 bg-[#2ca01c] text-white rounded-full text-[12px] font-medium">
                      Active
                    </span>
                  </div>
                  <p className="text-[14px] text-[#4a5565]">
                    Next billing date: April 1, 2026
                  </p>
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-[#0a0a0a] mb-4">
                    Payment Method
                  </h3>
                  <div className="flex items-center gap-4 p-4 border border-[#d1d5dc] rounded-[10px]">
                    <CreditCard className="w-8 h-8 text-[#4a5565]" />
                    <div className="flex-1">
                      <p className="text-[14px] font-medium text-[#0a0a0a]">
                        Visa ending in 4242
                      </p>
                      <p className="text-[12px] text-[#4a5565]">Expires 12/2026</p>
                    </div>
                    <button
                      onClick={() => toast.info("Edit payment method coming soon!")}
                      className="text-[14px] text-[#2ca01c] hover:underline"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleCancelSubscription}
                  className="border border-[#dc2626] text-[#dc2626] px-6 py-3 rounded-[10px] font-medium hover:bg-red-50 transition-colors"
                >
                  Cancel Subscription
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

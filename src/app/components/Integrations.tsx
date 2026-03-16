import { useState } from "react";
import { Check, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface Integration {
  id: string;
  name: string;
  description: string;
  category: string;
  connected: boolean;
  logo: string;
}

const initialIntegrations: Integration[] = [
  {
    id: "1",
    name: "Stripe",
    description: "Accept payments and manage subscriptions",
    category: "Payment",
    connected: false,
    logo: "💳",
  },
  {
    id: "2",
    name: "PayPal",
    description: "Alternative payment processing solution",
    category: "Payment",
    connected: false,
    logo: "💰",
  },
  {
    id: "3",
    name: "Slack",
    description: "Get financial notifications in Slack",
    category: "Communication",
    connected: false,
    logo: "💬",
  },
  {
    id: "4",
    name: "Google Drive",
    description: "Sync receipts and documents automatically",
    category: "Storage",
    connected: false,
    logo: "📁",
  },
  {
    id: "5",
    name: "Salesforce",
    description: "Sync customer and invoice data",
    category: "CRM",
    connected: false,
    logo: "☁️",
  },
  {
    id: "6",
    name: "Zapier",
    description: "Connect QuickBooks with 2000+ apps",
    category: "Automation",
    connected: false,
    logo: "⚡",
  },
  {
    id: "7",
    name: "Mailchimp",
    description: "Sync customer data for email campaigns",
    category: "Marketing",
    connected: false,
    logo: "📧",
  },
  {
    id: "8",
    name: "Xero",
    description: "Import/export accounting data",
    category: "Accounting",
    connected: false,
    logo: "📊",
  },
];

export function Integrations() {
  const [integrations, setIntegrations] = useState<Integration[]>(initialIntegrations);

  const connectedCount = integrations.filter((i) => i.connected).length;

  const handleConnect = (id: string) => {
    setIntegrations(
      integrations.map((integration) =>
        integration.id === id ? { ...integration, connected: true } : integration
      )
    );
    const integration = integrations.find((i) => i.id === id);
    toast.success(`Successfully connected to ${integration?.name}!`);
  };

  const handleDisconnect = (id: string) => {
    if (confirm("Are you sure you want to disconnect this integration?")) {
      setIntegrations(
        integrations.map((integration) =>
          integration.id === id ? { ...integration, connected: false } : integration
        )
      );
      const integration = integrations.find((i) => i.id === id);
      toast.success(`Disconnected from ${integration?.name}`);
    }
  };

  const handleConfigure = (name: string) => {
    toast.info(`Opening configuration for ${name}...`);
    // In a real app, this would open a configuration modal or redirect to settings
  };

  const handleLearnMore = (name: string) => {
    toast.info(`Opening documentation for ${name}...`);
    // In a real app, this would open external documentation
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-[30px] font-medium text-[#0a0a0a] mb-2">Integrations</h1>
        <p className="text-[16px] text-[#4a5565]">
          Connect QuickBooks with your favorite tools
        </p>
      </div>

      <div className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 mb-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[20px] font-medium text-[#0a0a0a] mb-1">Connected Apps</h2>
            <p className="text-[14px] text-[#4a5565]">
              You have {connectedCount} app{connectedCount !== 1 ? "s" : ""} connected
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#2ca01c]">
            <Check className="w-5 h-5" />
            <span className="text-[24px] font-medium">
              {connectedCount}/{integrations.length}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className="bg-white border border-[#f3f4f6] rounded-[14px] p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-[10px] flex items-center justify-center text-2xl">
                  {integration.logo}
                </div>
                <div>
                  <h3 className="text-[18px] font-medium text-[#0a0a0a] mb-1">
                    {integration.name}
                  </h3>
                  <span className="text-[12px] px-2 py-1 bg-gray-100 text-[#4a5565] rounded-full">
                    {integration.category}
                  </span>
                </div>
              </div>
              {integration.connected && (
                <div className="flex items-center gap-1 text-[#2ca01c]">
                  <Check className="w-4 h-4" />
                  <span className="text-[12px] font-medium">Connected</span>
                </div>
              )}
            </div>

            <p className="text-[14px] text-[#4a5565] mb-6">{integration.description}</p>

            <div className="flex items-center gap-3">
              {integration.connected ? (
                <>
                  <button
                    onClick={() => handleConfigure(integration.name)}
                    className="flex-1 px-4 py-2 border border-[#d1d5dc] text-[#364153] rounded-[8px] hover:bg-gray-50 transition-colors text-[14px] font-medium"
                  >
                    Configure
                  </button>
                  <button
                    onClick={() => handleDisconnect(integration.id)}
                    className="flex-1 px-4 py-2 border border-[#dc2626] text-[#dc2626] rounded-[8px] hover:bg-red-50 transition-colors text-[14px] font-medium"
                  >
                    Disconnect
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleConnect(integration.id)}
                    className="flex-1 px-4 py-2 bg-[#2ca01c] text-white rounded-[8px] hover:bg-[#259017] transition-colors text-[14px] font-medium"
                  >
                    Connect
                  </button>
                  <button
                    onClick={() => handleLearnMore(integration.name)}
                    className="px-4 py-2 border border-[#d1d5dc] text-[#364153] rounded-[8px] hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

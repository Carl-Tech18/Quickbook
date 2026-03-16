import { useState } from "react";
import { Upload, X, FileText, Receipt, Users, Scan } from "lucide-react";
import { toast } from "sonner";
import { useUser } from "../context/UserContext";

interface DocumentScannerProps {
  onClose: () => void;
}

type DocumentType = "invoice" | "expense" | "payroll";

export function DocumentScanner({ onClose }: DocumentScannerProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [documentType, setDocumentType] = useState<DocumentType>("invoice");
  const [isScanning, setIsScanning] = useState(false);
  const { addInvoice, addExpense, addEmployee, invoices, expenses, employees } = useUser();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const simulateAIScan = async (file: File, type: DocumentType) => {
    // Simulate AI/OCR processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const currentDate = new Date();
    const formatDate = (date: Date) => date.toISOString().split("T")[0];

    // Get day of week (0 = Sunday, 1 = Monday, etc.)
    const dayOfWeek = currentDate.getDay();

    // Generate mock data based on document type
    switch (type) {
      case "invoice": {
        const clients = ["Acme Corp", "Tech Solutions", "Global Industries", "Prime Services", "Innovation Labs"];
        const randomClient = clients[Math.floor(Math.random() * clients.length)];
        const randomAmount = Math.floor(Math.random() * 9000) + 1000;
        
        // Set due date to be within current month for better visibility in dashboard
        const dueDate = new Date();
        const randomDaysOffset = Math.floor(Math.random() * 28) - 14; // -14 to +14 days
        dueDate.setDate(dueDate.getDate() + randomDaysOffset);
        
        // Randomly assign status - 60% paid, 40% pending for demo purposes
        const statuses = ["paid", "paid", "paid", "pending", "pending"] as const;
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        const invoice = {
          id: `INV-${String(invoices.length + 1).padStart(3, "0")}`,
          client: randomClient,
          amount: randomAmount,
          dueDate: formatDate(dueDate),
          status: randomStatus,
        };
        
        addInvoice(invoice);
        return { type: "invoice", data: invoice };
      }

      case "expense": {
        const expenseNames = ["Office Supplies", "Software License", "Client Lunch", "Travel Expenses", "Equipment Purchase"];
        const categories = ["Office Supplies", "Software", "Meals", "Travel", "Office Supplies"];
        const randomIndex = Math.floor(Math.random() * expenseNames.length);
        const randomAmount = Math.floor(Math.random() * 500) + 50;
        
        const expense = {
          id: `EXP-${String(expenses.length + 1).padStart(3, "0")}`,
          name: expenseNames[randomIndex],
          amount: randomAmount,
          category: categories[randomIndex],
          date: formatDate(currentDate),
          receipt: true,
        };
        
        addExpense(expense);
        return { type: "expense", data: expense };
      }

      case "payroll": {
        const names = ["John Smith", "Sarah Johnson", "Michael Brown", "Emily Davis", "David Wilson"];
        const positions = ["Software Engineer", "Marketing Manager", "Sales Representative", "Accountant", "Project Manager"];
        const randomIndex = Math.floor(Math.random() * names.length);
        const randomSalary = Math.floor(Math.random() * 5000) + 3000;
        
        const employee = {
          id: String(employees.length + 1),
          name: names[randomIndex],
          position: positions[randomIndex],
          salary: randomSalary,
          schedule: "Monthly",
          lastPaid: formatDate(currentDate),
        };
        
        addEmployee(employee);
        return { type: "payroll", data: employee };
      }

      default:
        return null;
    }
  };

  const handleScan = async () => {
    if (!selectedFile) {
      toast.error("Please select a document to scan");
      return;
    }

    setIsScanning(true);
    
    try {
      const result = await simulateAIScan(selectedFile, documentType);
      
      if (result) {
        switch (result.type) {
          case "invoice":
            toast.success("Invoice scanned and saved successfully!");
            break;
          case "expense":
            toast.success("Expense scanned and saved successfully!");
            break;
          case "payroll":
            toast.success("Employee document scanned and saved successfully!");
            break;
        }
      }
      
      // Close the dialog after successful scan
      setTimeout(() => {
        onClose();
      }, 500);
    } catch (error) {
      toast.error("Failed to scan document. Please try again.");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-[14px] p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[24px] font-medium text-[#0a0a0a]">Scan Document</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Document Type Selection */}
          <div>
            <label className="block text-[14px] font-medium text-[#364153] mb-3">
              Document Type
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setDocumentType("invoice")}
                className={`p-4 border-2 rounded-[10px] transition-all ${
                  documentType === "invoice"
                    ? "border-[#2ca01c] bg-[#e8f5e6]"
                    : "border-[#e5e7eb] hover:border-[#d1d5dc]"
                }`}
              >
                <FileText className={`w-6 h-6 mx-auto mb-2 ${
                  documentType === "invoice" ? "text-[#2ca01c]" : "text-[#6a7282]"
                }`} />
                <p className={`text-[12px] font-medium ${
                  documentType === "invoice" ? "text-[#2ca01c]" : "text-[#364153]"
                }`}>
                  Invoice
                </p>
              </button>

              <button
                onClick={() => setDocumentType("expense")}
                className={`p-4 border-2 rounded-[10px] transition-all ${
                  documentType === "expense"
                    ? "border-[#2ca01c] bg-[#e8f5e6]"
                    : "border-[#e5e7eb] hover:border-[#d1d5dc]"
                }`}
              >
                <Receipt className={`w-6 h-6 mx-auto mb-2 ${
                  documentType === "expense" ? "text-[#2ca01c]" : "text-[#6a7282]"
                }`} />
                <p className={`text-[12px] font-medium ${
                  documentType === "expense" ? "text-[#2ca01c]" : "text-[#364153]"
                }`}>
                  Expense
                </p>
              </button>

              <button
                onClick={() => setDocumentType("payroll")}
                className={`p-4 border-2 rounded-[10px] transition-all ${
                  documentType === "payroll"
                    ? "border-[#2ca01c] bg-[#e8f5e6]"
                    : "border-[#e5e7eb] hover:border-[#d1d5dc]"
                }`}
              >
                <Users className={`w-6 h-6 mx-auto mb-2 ${
                  documentType === "payroll" ? "text-[#2ca01c]" : "text-[#6a7282]"
                }`} />
                <p className={`text-[12px] font-medium ${
                  documentType === "payroll" ? "text-[#2ca01c]" : "text-[#364153]"
                }`}>
                  Payroll
                </p>
              </button>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-[14px] font-medium text-[#364153] mb-2">
              Upload Document
            </label>
            <div className="border-2 border-dashed border-[#d1d5dc] rounded-[10px] p-8 text-center hover:border-[#2ca01c] transition-colors">
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-3 text-[#99a1af]" />
                {selectedFile ? (
                  <div>
                    <p className="text-[14px] font-medium text-[#2ca01c] mb-1">
                      {selectedFile.name}
                    </p>
                    <p className="text-[12px] text-[#6a7282]">
                      Click to change file
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-[14px] font-medium text-[#364153] mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-[12px] text-[#6a7282]">
                      PDF, PNG, JPG (MAX. 10MB)
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Scan Button */}
          <button
            onClick={handleScan}
            disabled={!selectedFile || isScanning}
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-[10px] font-medium transition-colors ${
              !selectedFile || isScanning
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#2ca01c] text-white hover:bg-[#259017]"
            }`}
          >
            {isScanning ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Scanning Document...
              </>
            ) : (
              <>
                <Scan className="w-5 h-5" />
                Scan & Extract Data
              </>
            )}
          </button>

          <p className="text-[12px] text-[#6a7282] text-center">
            AI-powered scanning will automatically extract and save data from your document
          </p>
        </div>
      </div>
    </div>
  );
}
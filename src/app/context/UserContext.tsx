import { createContext, useContext, useState, ReactNode } from "react";

interface UserData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
}

interface Invoice {
  id: string;
  client: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
}

interface Expense {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: string;
  receipt: boolean;
}

interface Employee {
  id: string;
  name: string;
  position: string;
  salary: number;
  schedule: string;
  lastPaid: string;
}

interface UserContextType {
  user: UserData | null;
  setUser: (user: UserData) => void;
  clearUser: () => void;
  invoices: Invoice[];
  expenses: Expense[];
  employees: Employee[];
  addInvoice: (invoice: Invoice) => void;
  addExpense: (expense: Expense) => void;
  addEmployee: (employee: Employee) => void;
  updateInvoice: (id: string, invoice: Partial<Invoice>) => void;
  updateExpense: (id: string, expense: Partial<Expense>) => void;
  updateEmployee: (id: string, employee: Partial<Employee>) => void;
  deleteInvoice: (id: string) => void;
  deleteExpense: (id: string) => void;
  deleteEmployee: (id: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUserData] = useState<UserData | null>(null);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const setUser = (userData: UserData) => {
    setUserData(userData);
  };

  const clearUser = () => {
    setUserData(null);
  };

  const addInvoice = (invoice: Invoice) => {
    setInvoices((prev) => [...prev, invoice]);
  };

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const addEmployee = (employee: Employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const updateInvoice = (id: string, updatedInvoice: Partial<Invoice>) => {
    setInvoices((prev) =>
      prev.map((inv) => (inv.id === id ? { ...inv, ...updatedInvoice } : inv))
    );
  };

  const updateExpense = (id: string, updatedExpense: Partial<Expense>) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, ...updatedExpense } : exp))
    );
  };

  const updateEmployee = (id: string, updatedEmployee: Partial<Employee>) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, ...updatedEmployee } : emp))
    );
  };

  const deleteInvoice = (id: string) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const deleteEmployee = (id: string) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        clearUser,
        invoices,
        expenses,
        employees,
        addInvoice,
        addExpense,
        addEmployee,
        updateInvoice,
        updateExpense,
        updateEmployee,
        deleteInvoice,
        deleteExpense,
        deleteEmployee,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
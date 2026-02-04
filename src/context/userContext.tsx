import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface User {
  fullname: string;
  email: string;
}

interface SignupData {
  fullname: string;
  email: string;
  password: string;
  phone: string;
  company: string;
  agency: string;
}

interface UserContextType {
  user: User | null;
  signup: (data: SignupData) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signup = async (data: SignupData) => {
    try {
      console.log("SIGNUP REQUEST:", data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setUser({ fullname: data.fullname, email: data.email });
      return true;
    } catch (err) {
      console.error("Signup failed:", err);
      return false;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // Simulated login
      console.log("LOGIN REQUEST:", { email, password });
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Hardcoded login success for demo (replace with real API call)
      if (email === "test@example.com" && password === "123456") {
        setUser({ fullname: "Test User", email });
        return true;
      }
      return false;
    } catch (err) {
      console.error("Login failed:", err);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

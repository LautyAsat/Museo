"use client";

import { logoutAction } from "@/app/(auth)/login/actions";
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

interface User {
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: React.ReactNode;
  initialUser: User | null;
};

function AuthProvider({ children, initialUser }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(initialUser);
  const router = useRouter();

  useEffect(() => {
    setUser(initialUser);
  }, [initialUser]);

  const handleLogout = async () => {
    await logoutAction();
    setUser(null);
    router.refresh();
  };

  return (
    <AuthContext.Provider value={{ user, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };

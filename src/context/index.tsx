"use client"
import { User } from "next-auth";
import { getSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react";

declare module 'next-auth/' {
    interface User {
      isAdmin: boolean;
      id?: string | undefined;
    } 
}

interface InitialContext {
  user: User | null | undefined;
}

export const UserContext = createContext<InitialContext>({
  user: null,

});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null | undefined>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
          const session = await getSession();  
        if (session) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user session:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
    return useContext(UserContext);
}
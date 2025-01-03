import React, { createContext } from 'react';

export interface User {
  id: number;
  name: string;
  email: string;
  // Add other user properties as needed
}

export interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  login: (userData: User) => void;
  logout: () => void;
  checkAuth: () => void;
  loading: boolean;
}

export const UserContext = createContext<UserContextType | null>(null);

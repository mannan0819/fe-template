import React, { useState } from 'react';
import { UserContext, User, UserContextType } from './UserContext';
import { API_URL } from '../shared/constants';
import axios from 'axios';

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const checkAuth = async () => {
    console.log('Checking auth...');
    setLoading(true);
    const user =
      (
        await axios.get(`${API_URL}/public/me`, {
          withCredentials: true,
        })
      )?.data ?? null;
    setLoading(false);
    if (user) {
      setUser(user);
    }
  };

  const contextValue: UserContextType = {
    user,
    setUser,
    login,
    logout,
    checkAuth,
    loading: isLoading,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

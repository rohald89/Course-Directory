import { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext();

function UserProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useLocalStorage('authenticatedUser', null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const signIn = async ({ emailAddress, password }) => {
    setLoading(true);
    console.log(emailAddress, password);
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${emailAddress}:${password}`)}`,
      },
    });
    if (response.status === 200) {
      await response.json().then(data => setAuthenticatedUser({ ...data, password }));
    } else {
      await response.json().then(setError);
    }
    setLoading(false);
  };

  const signOut = () => {
    setAuthenticatedUser(null);
  };

  const signUp = async newUser => {
    setLoading(true);
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: newUser,
    });
    console.log(response);
    if (response.status === 201) {
      const { emailAddress, password } = newUser;
      await signIn({ emailAddress, password });
    } else if (response.status === 400) {
      return await response.json();
    }
  };

  const value = {
    authenticatedUser,
    setAuthenticatedUser,
    loading,
    error,
    signIn,
    signOut,
    signUp,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { UserProvider, useUser };

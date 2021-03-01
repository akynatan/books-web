import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  gender: string;
  birthdate: string;
  email: string;
}

interface SignInCredentials {
  mail: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@DesafioIoasys:token');
    const user = localStorage.getItem('@DesafioIoasys:user');

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ mail, password }) => {
    const response = await api.post('auth/sign-in', {
      email: mail,
      password,
    });

    const { name, id, gender, birthdate, email } = response.data;
    const { authorization: token } = response.headers;

    const refresh_token = response.headers['refresh-token'];

    const user = { id, name, gender, birthdate, email };

    localStorage.setItem('@DesafioIoasys:token', token);
    localStorage.setItem('@DesafioIoasys:refresh', refresh_token);
    localStorage.setItem('@DesafioIoasys:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@DesafioIoasys:token');
    localStorage.removeItem('@DesafioIoasys:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setData({
        token: data.token,
        user,
      });

      localStorage.setItem('@DesafioIoasys:user', JSON.stringify(user));
    },
    [data.token, setData],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthContext, AuthProvider, useAuth };

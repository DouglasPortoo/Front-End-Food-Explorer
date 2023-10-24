import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

import { api } from "../services/api";

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      // const response = await api.post("/sessions", { email, password });
      const response = await api.post("/sessions", { email, password });
      const { user } = response.data;
      // const { user, token } = response.data;

      // api.defaults.headers.authorization = `Bearer ${token}`;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      // localStorage.setItem("@foodexplorer:token", token);

      setData({ user });
      // setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    // localStorage.removeItem("@foodexplorer:token");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    // const token = localStorage.getItem("@foodexplorer:token");

    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }
    // if (token && user) {
    //   api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //   setData({
    //     token,
    //     user: JSON.parse(user),
    //   });
    // }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };

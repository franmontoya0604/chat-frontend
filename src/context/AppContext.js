import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

const ProviderContext = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [currentId, setCurrentId] = useState(localStorage.getItem("currentId"));
  const [render, setRender] = useState(null);

  const addUser = async (name) => {
    //cuando se haga login si el user ya existe con ese nombre se devuelve su id para guardarlo en el storage y si no existe se agrega en la db y devuelve su id.
    console.log("addUser");
    console.log(name);

    try {
      setLoading(true);
      let data = await fetch("http://localhost:3000/user", {
        method: "POST",
        body: JSON.stringify({ name: name }),
        headers: { "Content-Type": "application/json" },
      });
      let response = await data.json();
      console.log(response.body);
      sessionStorage.setItem("auth", true);
      localStorage.setItem("currentId", response.body);
      setCurrentId(response.body);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  const addMessage = async (message) => {
    try {
      setLoading(true);
      let data = await fetch("http://localhost:3000/message", {
        method: "POST",
        body: JSON.stringify({ user: currentId, message: message }),
        headers: { "Content-Type": "application/json" },
      });
      let response = await data.json();
      setRender(response);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  const logout = () => {
    sessionStorage.setItem("auth", false);
    localStorage.setItem("currentId", null);
    setCurrentId(null);
  };

  useEffect(() => {
    async function apiCall() {
      try {
        setLoading(true);
        let dataMsg = await fetch("http://localhost:3000/message");
        let responseMsg = await dataMsg.json();
        setMessages(responseMsg.body);

        let dataUser = await fetch("http://localhost:3000/user");
        let responseUser = await dataUser.json();

        setUsers(responseUser);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    apiCall();
  }, [render, setRender]);

  return (
    <AppContext.Provider
      value={{
        messages,
        users,
        loading,
        error,
        addUser,
        addMessage,
        logout,
        currentId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default ProviderContext;

import React, { useState } from "react";
import SignIn from "../components/SignIn";
import { useNavigate } from "react-router-dom";

import "./styles/login.css";
import useInitialState from "../hooks/useInitialState";

const Login = () => {
  const [usuario, setUsuario] = useState({
    name: "",
  });

  const { addUser } = useInitialState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("por loguear");
      await addUser(usuario.name);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUsuario({ [name]: value });

  return (
    <div className="login">
      <div className="login-signin">
        <SignIn change={handleChange} submit={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;

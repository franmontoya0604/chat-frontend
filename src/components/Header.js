import React from "react";
import useInitialState from "../hooks/useInitialState";
import { useNavigate } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  const { logout } = useInitialState();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top" id="header">
      <div className="container">
        <a className="navbar-brand">ChatLine</a>
        <button
          type="button"
          className="btn btn-danger logout"
          onClick={handleClick}
        >
          Cerrar Sesion
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      </div>
    </nav>
  );
};

export default Header;

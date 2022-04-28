import React from "react";

const SignIn = ({ change, submit }) => {
  return (
    <>
      <p> Ingrese su usuario</p>
      <form onSubmit={submit}>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          name="name"
          onChange={change}
        />
        <button type="submit" className="btn btn-danger">
          Ingresar
        </button>
      </form>
    </>
  );
};

export default SignIn;

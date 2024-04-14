import React, { useState } from "react";
import "./Login.css";
import ButtonComponent from "../components/Button";

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page-container">
      <span className="login-header">Entry</span>
      <div className="input-container">
        <label>User ID</label>
        <input
          placeholder="User Id"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
      </div>
      <div className="input-container">
        <label>Password</label>
        <input
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <ButtonComponent buttonText="Login" />
      </div>
    </div>
  );
};

export default LoginPage;

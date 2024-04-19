import React, { useState } from "react";
import "./Login.css";
import ButtonComponent from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios({
        url: "http://localhost:8080/login",
        method: "POST",
        data: {
          emailAddress: userId,
          password: password,
        },
      });
      console.log("response", response);
      setMessageText(response.data.message);
      navigate("/home");
      return response;
    } catch (err) {
      console.log("err", err);
    }
  };

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
        <ButtonComponent buttonText="Login" onClick={handleSubmit} />
      </div>
      {messageText && <span>{messageText}</span>}
    </div>
  );
};

export default LoginPage;

import React, { useState, useContext } from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const emailregx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passregx = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/;

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.toLowerCase().match(emailregx);
const isPassword = (value) => value.toLowerCase().match(passregx);

const AuthPage = () => {
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);
  const modalCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <AuthForm
      emailregex={emailregx}
      passregx={passregx}
      isNotEmpty={isNotEmpty}
      isEmail={isEmail}
      isPassword={isPassword}
      navigate={navigate}
      authCtx={authCtx}
      modalCtx={modalCtx}
      isLoading={isLoading}
      isLogin={isLogin}
      setIsLoading={setIsLoading}
      setIsLogin={setIsLogin}
    />
  );
};

export default AuthPage;

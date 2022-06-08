import React from "react";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const navigate = useNavigate();

  const newPasswordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAsJgNrox24sxPJLVDa_0hTtU5iem_ZvN4",

      {
        method: "Post",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),

        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      navigate("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="8"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;

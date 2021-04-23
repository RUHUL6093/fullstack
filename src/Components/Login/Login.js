import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.confiq";
import { useHistory, useLocation } from "react-router-dom";
import Register from "../Register/Register";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  const history = useHistory();
  const location = useLocation();
  const [error, setError] = useState("");
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSingnIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const loggedInUser = {
          name: user.displayName,
          email: user.email,
          img: user.photoURL
        };
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="container m-5 ">
      <Register />
      <button
        onClick={handleGoogleSingnIn}
        className="btn btn-primary text-center"
      >
        Continue With Google
      </button>
      <p> {error}</p>
    </div>
  );
};
export default Login;

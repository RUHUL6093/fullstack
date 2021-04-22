import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.confiq";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSingnIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  return (
    <div className="container m-5 ">
      <button
        onClick={handleGoogleSingnIn}
        className="btn btn-primary text-center"
      >
        Continue With Google
      </button>
    </div>
  );
};
export default Login;

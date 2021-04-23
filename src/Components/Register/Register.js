import React from "react";
const Register = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <form className="form-control m-5">
          <h3> Register as a User</h3>
          <input type="text" name="userName" placeholder="userName" />
          <br />
          <br />
          <input type="text" name="email" placeholder="email" />
          <br />
          <br />
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Register;

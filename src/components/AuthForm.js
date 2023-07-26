import React from "react";

import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

require("../components/AuthForm.css");

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="container d-flex justify-content-center align-items-center login-container">
      <div className="card login-card">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram Logo"
          className="instagram-logo"
        />

        <Form method="post" className="form">
          <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          )}
          {data && data.message && <p>{data.message}</p>}
          {!isLogin && (
            <div className="formGroup">
              <p>
                <label htmlFor="email">Username</label>
                <input
                  id="username"
                  type="username"
                  name="username"
                  required
                  className="formGroup"
                />
              </p>
            </div>
          )}

          <div className="formGroup">
            <p>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="formGroup"
              />
            </p>
          </div>
          <div className="formGroup">
            <p>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className="formGroup"
                required
              />
            </p>
          </div>
          <div className="actions">
            <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
              {isLogin ? "Create new user" : "Login"}
            </Link>
            <div className="btn btn-primary btn-block">
              <button disabled={isSubmitting}>
                {isLogin ? "Login" : "Signup"}
              </button>
            </div>
          </div>
        </Form>

        {/*       
        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
            {isLogin ? "Don't have an account? Sign up" : 'Login'}
          </Link> */}
      </div>
    </div>
  );
}

export default AuthForm;

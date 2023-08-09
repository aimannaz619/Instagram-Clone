import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

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
    // <div className="container d-flex justify-content-center align-items-center login-container">

    <div className="d-flex flex-column align-items-center">
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container d-flex justify-content-center">
          {/* Container for Logo */}
          <div className="navbar-brand">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="Instagram Logo"
              width="150"
            />
          </div>
        </div>
      </nav>
    </header>

      <div className="container col-lg-8">
        <div className="row py-5 mt-4 align-items-center">
          <div className="col-md-7 col-lg-6 mx-auto">
            <Form method="post">
              <div className="row">
                {/* First Name */}
                {!isLogin && <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      {/* Replace the Font Awesome class with the appropriate icon */}
                      <i className="fa fa-user text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    required
                    placeholder="Username"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                }

                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      {/* Replace the Font Awesome class with the appropriate icon */}
                      <i className="fa fa-envelope text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>

                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      {/* Replace the Font Awesome class with the appropriate icon */}
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    className="form-control bg-white border-left-0 border-md"
                  />
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

                {/* Add other form fields here */}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;

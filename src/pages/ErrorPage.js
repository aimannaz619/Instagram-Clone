import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ErrorPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center align-items-center vh-100">
          <div className="text-danger font-weight-bold display-4">
            Page not found
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;

// import { Form, Button, Nav } from "react-bootstrap";
// import React from "react";

// import { Link ,NavLink } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.css";
// require('../components/MainNavigation.css')
// function Home() {

//   return (
// //     <div className="card mb-4">
// //     {/* Post Image */}
// //     <img src="" className="card-img-top" alt="Post" />

// //     {/* Card Body */}
// //     <div className="card-body">
// //       {/* Post Caption */}
// //       <h5 className="card-title">Title</h5>
// //       <p className="card-text">Text</p>

// //       {/* Like and Comment Counts */}
// //       <div className="d-flex justify-content-between align-items-center">
// //         <div>
// //           <span className="text-muted"> likes</span>
// //           <span className="text-muted ml-3"> comments</span>
// //         </div>
// //         {/* You can add buttons for liking, commenting, etc. here */}
// //       </div>
// //     </div>
// //   </div>
// <div className="card mb-4">
// {/* Post Image */}
// <img src="" className="card-img-top" alt="Post" />

// {/* Card Body */}
// <div className="card-body">
//   {/* Post Caption */}
//   <h5 className="card-title">username</h5>
//   <p className="card-text">title</p>

//   {/* Like and Comment Counts */}
//   <div className="d-flex justify-content-between align-items-center">
//     <div>
//       <span className="text-muted"> likes</span>
//       <span className="text-muted ml-3"> comments</span>
//     </div>
//     {/* You can add buttons for liking, commenting, etc. here */}
//   </div>
// </div>
// </div>
//   )
// }
// export default

import React from "react";

import PostsPage from "./Posts.js";
import Header from "./MainNavigation.js";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer.js";
import ProfilePage from "../pages/Profile.js";

const HomePage = () => {
  return (
    <>
      <Header />

      <PostsPage />
      <Footer />

      <Outlet />
    </>
  );
};

export default HomePage;

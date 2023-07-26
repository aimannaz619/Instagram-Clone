// // import { RouterProvider, createBrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import RootLayout from './pages/Root';

// import "react-bootstrap/dist/react-bootstrap.min.js";
// import HomePage from './components/Home'
// import MyPostsPage from './components/myPosts';
// import PostsPage from './components/Posts';
// import ProfilePage from './pages/Profile';
// // import PostsPage from './components/Posts'
// import AuthenticationPage, {
//   action as authAction,
// } from './pages/Authentication';
// import { AuthContext } from './context/auth-context';
// import {  Navigate} from 'react-router';
// // import { BrowserRouter as Router, Route , Routes , Fragment} from 'react-router-dom';
// import { useCallback, useState } from 'react';

// // import PostsPage, {loader as PostsLoader} from './components/Posts'



// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Navigate,
// } from "react-router-dom";

// import { redirect } from "react-router-dom";
// import HomePage from "./components/Home";
// import MyPostsPage from "./components/myPosts";
// import PostsPage from "./components/Posts";
// import ProfilePage from "./pages/Profile";
// // import PostsPage from './components/Posts'
// import AuthenticationPage, {
//   action as authAction,
// } from "./pages/Authentication";

// const App = () => {
//   // Implement your authentication logic to determine if the user is logged in or not.
//   const isLoggedIn = false; // Change this based on your authentication logic.

//   return (
//     // <Router>
//     //   <Routes>
//     //     {/* If the user is not logged in, show the login/signup page */}
//     //     {!isLoggedIn && (
//     //       <Route exact path="/login"  element={<AuthenticationPage />} />
//     //     )}

//     //     {/* If the user is logged in, show the home page */}
//     //     {isLoggedIn && (
//     //       <Routes>
//     //         <Route exact path="/" element={<HomePage />} />

//     //         {/* Nested routes for the home page */}

//     //         <Route exact path="/posts" element={<PostsPage />} />
//     //         <Route exact path="/profile" element={<ProfilePage />} />
//     //         <Route exact path="/myposts" element={<MyPostsPage />} />
//     //       </Routes>
//     //     )}

//     //     {/* Redirect to the appropriate page based on the login status */}
//     //     {/* <Route path="/">
//     //       {isLoggedIn ? <Navigate to="/" /> : <Navigate to="/login" />}
//     //     </Route> */}
//     //     <Route
//     //       exact
//     //       path="/auth" 
  
//     //       element={isLoggedIn ? <Navigate to="/" /> : <AuthenticationPage />}
//     //     />
//     //   </Routes>
//     // </Router>





//   );
// };

// export default App;




import React from "react";
import { useState,useCallback } from "react";


import { RouterProvider , createBrowserRouter} from 'react-router-dom';

import { redirect } from "react-router-dom";
import HomePage from "./components/Home";
import MyPostsPage from "./components/myPosts";
import PostsPage from "./components/Posts";
import ProfilePage from "./pages/Profile";
// import PostsPage from './components/Posts'
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { AuthContext } from "./context/auth-context";

const App = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  // Implement your authentication logic to determine if the user is logged in or not.
 // Change this based on your authentication logic.

 const login = useCallback(()=>{
  setIsLoggedIn(true)
 },[])

 const logout = useCallback(()=>{
  setIsLoggedIn(false)
 },[])


  const router = createBrowserRouter([
    {
      path:'/',
      children:[
       {index: true,  element:<HomePage />},
       {
        path:'posts' , element:<PostsPage />
      },
      {
        path:'profile' , element:<ProfilePage />
      },
      {path:'myposts' , element:<MyPostsPage />},
      {
        path:'auth' , element:<AuthenticationPage />,
        action: authAction,
      }
      ]
     
    }
   
  ])
  return (
<>
{/* <AuthContext.Provider value={{isLoggedIn:isLoggedIn , login:login , logout:logout}}/> */}
<RouterProvider router={router} />
</>




  );
};

export default App;


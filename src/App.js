import React from "react";
import { useState, useCallback } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
import CreatePosts from "./pages/CreatePosts";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Implement your authentication logic to determine if the user is logged in or not.
  // Change this based on your authentication logic.

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "posts",
          element: <PostsPage />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
        { path: "myposts", element: <MyPostsPage /> },
        {
          path: "auth",
          element: <AuthenticationPage />,
          action: authAction,
        },
        {
          path: "createPosts",
          element: <CreatePosts />,
        },
      ],
    },
  ]);
  return (
    <>
      {/* <AuthContext.Provider value={{isLoggedIn:isLoggedIn , login:login , logout:logout}}/> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;

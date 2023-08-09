import React from "react";
import { useState, useCallback } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { redirect } from "react-router-dom";
import HomePage from "./components/Home";
import MyPostsPage from "./components/myPosts";
import PostsPage from "./components/Posts";
import ProfilePage from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";

// import PostsPage from './components/Posts'
import { action as PostsAction } from "./components/PostsForm";

import { AuthContext } from "./context/auth-context";
import CreatePosts from "./pages/CreatePosts";
import EditPost from "./components/EditPost";

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
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: "profile",
          element: <ProfilePage />,
        },
        {
          path: "myposts",
          children: [
            {
              index: true,
              element: <MyPostsPage />,
            },
            {
              path: ":id/edit",
              element: <EditPost />,
            },
          ],
        },
        // {
        //   path: "myposts",
        //   element: <MyPostsPage />,

        //   //   children: [
        //   //     {
        //   //       path: ":id/edit",
        //   //       element: <EditPost />,
        //   //     },
        //   //   ],
        // },
        // {
        //   path: "myposts/:id/edit",
        //   element: <EditPost />,
        // },
        {
          path: "auth",
          element: <AuthenticationPage />,
          action: authAction,
        },
        {
          path: "createPosts",
          element: <CreatePosts />,
          // action:PostsAction
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

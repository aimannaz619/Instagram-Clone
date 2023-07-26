import { Suspense, useEffect, useState } from "react";
import { json, defer, useLoaderData, Await } from "react-router-dom";

import PostsList from "./PostsList";

function MyPostsPage() {
    //  const {posts} = useLoaderData()

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/getmyposts");
  //       const result = await response.json();
  //       console.log("result is " + result);
  //       console.log("response is " + response);

  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  

  // return (
  //   <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
  //     <Await resolve={data}>
  //       {(loadedposts) => <PostsList posts={loadedposts} />}
  //     </Await>
  //   </Suspense>

  // );

return(
    <h2>My posts page</h2>
)
}
export default MyPostsPage;

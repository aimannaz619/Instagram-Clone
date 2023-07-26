import { Suspense, useEffect, useState } from "react";
import { json, defer, useLoaderData, Await } from "react-router-dom";

import PostsList from "./PostsList";

function PostsPage() {
  //    const {posts} = useLoaderData()

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/getallposts");
        const result = await response.json();
        console.log("result is " + result);
        // console.log("response is " + response);

        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data}>
        {(loadedposts) => <PostsList posts={loadedposts} />}
      </Await>
    </Suspense>

  );
}
export default PostsPage;







// async function loadPosts() {
//   const response = await fetch("http://localhost:3000/getallposts");

//   if (!response.ok) {
//     throw json(
//       {
//         message: "Could not fetch posts",
//       },
//       {
//         status: 500,
//       }
//     )
//   } else {
//     const posts = await response.json();
//     return posts;
//   }

//       // return (
//       //     console.log("loader is working")
//       // )
// }

// export function loader() {
//   return defer({
//     posts: loadPosts(),
//   });
// }

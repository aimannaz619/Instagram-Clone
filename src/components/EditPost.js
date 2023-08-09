import { useEffect, useState } from "react";

import { getAuthToken } from "../util/auth";
import PostsForm from "./PostsForm";
const EditPost = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:3000/getmyposts";

        const token = getAuthToken();
        console.log(token);
        const response = await fetch(url, {
          headers: {
            // "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });
        const result = await response.json();
   
        // console.log("response is " + response);

        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

return (
    <PostsForm method="patch" ></PostsForm>
    

)

};

export default EditPost;

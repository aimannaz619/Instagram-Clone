import React from "react";

import {
  Form,
  useNavigate,
  useActionData,
  json,
  redirect,
  useNavigation,
} from "react-router-dom";

import { getAuthToken } from "../util/auth";

import "bootstrap/dist/css/bootstrap.css";
import ImageUpload from "./FormElements/ImageUpload";

function CreatePostsForm({ method, event }) {
  const data = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="container-md p-5 my-5  mt-3">
      <Form method={method}>
        <div className="mb-3 mt-3">
          <div className="col-6">
            {" "}
            {/* Use 'col-6' class to maintain the width at all screen sizes */}
            <textarea
              className="form-control"
              rows="5"
              id="caption"
              name="caption"
              placeholder="Enter your captions here"
            ></textarea>
          </div>
        </div>
        {/* <div className="mb-3 mt-3">
          <input type="file"></input>
        </div> */}
        <ImageUpload />
        <div className="mb-3 mt-3">
          <div className="col-6">
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
        </div>
        </div>
      </Form>
    </div>
  );
}

export default CreatePostsForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    caption: data.get("caption"),
    image:data.get("image")
  };

  let url = "http://localhost:3000/createpost";

  const token = getAuthToken();
  console.log(token)
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/posts");
}

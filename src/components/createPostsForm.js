import React, { useState } from "react";

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

function CreatePostsForm() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState("");

  // Function to handle the caption
  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };
  // Function to handle the image selection
  const handleImageSelection = (file) => {
    setSelectedImage(file);
    console.log("selected file is " + file);
  };

  //Handling submission of form
  const handleSubmit = async () => {
    const formData = new FormData();

    //Append the caption to FormData object
    formData.append("caption", caption);

    // Append the selected image file to the FormData object
    if (selectedImage) {
      formData.append("image", selectedImage);
      console.log("selected image is " + selectedImage);
    }

    let url = "http://localhost:3000/createpost";

    const token = getAuthToken();
    console.log(token);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        // "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    if (response.status === 422) {
      return response;
    }
    if(response.status === 400){
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not save event." }, { status: 500 });
    }
    return redirect("/posts");
  };

  return (
    <div className="container-md p-5 my-5  mt-3">
      <Form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3">
          <div className="col-6">
            <textarea
              className="form-control"
              rows="5"
              id="caption"
              name="caption"
              placeholder="Enter your captions here"
              onChange={handleCaptionChange}
            ></textarea>
          </div>
        </div>

        <ImageUpload onImageSelect={handleImageSelection} />
        <div className="mb-3 mt-3">
          <div className="col-6">
            <button disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Save"}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default CreatePostsForm;

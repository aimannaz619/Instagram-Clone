import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import ImageUpload from "./FormElements/ImageUpload";

function CreatePostsForm() {
  return (
    <div className="container-md p-5 my-5  mt-3">
      <form>
        <div className="mb-3 mt-3">
          <div className="col-6">
            {" "}
            {/* Use 'col-6' class to maintain the width at all screen sizes */}
            <textarea
              className="form-control"
              rows="5"
              id="comment"
              name="text"
              placeholder="Enter your captions here"
            ></textarea>
          </div>
        </div>
        {/* <div className="mb-3 mt-3">
          <input type="file"></input>
        </div> */}
        <ImageUpload />
      </form>
    </div>
  );
}

export default CreatePostsForm;

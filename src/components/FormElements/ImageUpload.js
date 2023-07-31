import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./ImageUpload.css";

const ImageUpload = (props) => {
  const filePickerRef = useRef();
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };
  const pickedHandler = (event) => {
    let pickedFile
    let fileIsValid = isValid
    if (event.target.files && event.target.files.length === 1) {
       pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true
    }
    else{
        setIsValid(false)
        fileIsValid = false
    }
    props.onInput(props.id , pickedFile ,fileIsValid )
  };

  return (
    <>
      <div className="mb-3 mt-3">
        <input
          id={props.id}
          type="file"
          ref={filePickerRef}
          style={{ display: "none" }}
          accept=".jpg , .png , .jpeg"
          onChange={pickedHandler}
        ></input>
      </div>
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview ">
          <img src="" alt="preview" />
        </div>
      </div>
      <div>
        <Button type="button" onClick={pickImageHandler}>
          chose file
        </Button>
      </div>
    </>
  );
};

export default ImageUpload;

import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./ImageUpload.css";

const ImageUpload = (props) => {
  const filePickerRef = useRef();

  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };
  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
  };

  return (
    <>
      <div className="mb-3 mt-3">
        <input
          id={props.id}
          type="file"
          name="image"
          ref={filePickerRef}
          style={{ display: "none" }}
          accept=".jpg , .png , .jpeg"
          onChange={pickedHandler}
        ></input>
      </div>
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview ">
          {previewUrl && <img src={previewUrl} alt="preview" />}
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

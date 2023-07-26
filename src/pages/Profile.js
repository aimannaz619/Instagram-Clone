import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ProfilePage = () => {
  // Replace these with actual data from your profile
  const username = "John Doe";

  return (
    <>
      <div className=" m-4 justify-content-start ">
        <img
          src="https://media.istockphoto.com/id/155097073/photo/old-beech-tree-in-summer.jpg?s=612x612&w=0&k=20&c=cTuBEG1nIVC9FAlwSpIAbUxUc_QSUgUzjWDFzYA_8ek="
          style={{ borderRadius: "50%", width: "120px", height: "120px" }}
          alt="Profile"
          className="rounded-circle profile-photo img-fluid"
        />
        <h5 className="mt-3">{username}</h5>
        <button type="button" className="btn btn-secondary btn-sm m-4">
          Edit Profile
        </button>
        <button type="button" className="btn btn-secondary btn-sm ">
          Share Profile
        </button>
      </div>
    </>
  );
};

export default ProfilePage;

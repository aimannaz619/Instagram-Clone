import React from "react";

const PostCard = ({  caption , imageUrl }) => {
  return (
    <div className="card mb-4">
          <h5 className="card-title">{caption}</h5>
      {/* Post Image */}
      <img src={imageUrl} className="card-img-top" alt="Post" />

      {/* Card Body */}
      <div className="card-body">
        {/* Post Caption */}
        {/* <h5 className="card-title">{username}</h5> */}
     
        {/* <p className="card-text">{title}</p> */}

        {/* Like and Comment Counts */}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className="text-muted">33 likes</span>
            <span className="text-muted ml-3">4 comments</span>
          </div>
          {/* You can add buttons for liking, commenting, etc. here */}
        </div>
      </div>
    </div>
  );
};

export default PostCard;

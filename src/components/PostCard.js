import React from "react";

const PostCard = ({ caption, imageUrl }) => {
  console.log(imageUrl);
  return (
    //     <div >
    //    <div className="container mt-4">
    //     <div className="col justify-content-center">
    //      <div className="col-12">
    //           <h5 className="card-title">{caption}</h5>

    //       {/* Post Image */}
    //       <img src={`http://localhost:3000/${imageUrl}`} className="card-img-top" alt="Post" />

    //       {/* Card Body */}
    //       <div className="card-body">
    //         {/* Post Caption */}
    //         {/* <h5 className="card-title">{username}</h5> */}

    //         {/* <p className="card-text">{title}</p> */}

    //         {/* Like and Comment Counts */}
    //         <div className="d-flex justify-content-between align-items-center">
    //           <div>
    //             <span className="text-muted">33 likes</span>
    //             <span className="text-muted ml-3">4 comments</span>
    //           </div>
    //           {/* You can add buttons for liking, commenting, etc. here */}
    //         </div>
    //       </div>
    //     </div>
    // </div>
    //    </div>
    //    </div>

    <div className="col-lg-8">
      <div className="container mt-4">
        <div className="col justify-content-center">
          <h5 className="card-title">Title</h5>
          <img
            src={`http://localhost:3000/${imageUrl}`}
            className="card-img-top"
            alt="Post"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-muted ">33 likes</span>
                <span className="pl-10"></span>
                <span className="text-muted ml-3">4 comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ caption, imageUrl, showButtons , id}) => {
  
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

    <div className="col-xl-5 container-fluid text-center">
      <div className="container  mt-4">
        <div className="col justify-content-center">
          <h5 className="card-title">{caption}</h5>

          <img
            src={`http://localhost:3000/${imageUrl}`}
            className="card-img-top"
            alt="Post"
          />
          <div className="card-body">
            <div className="d-flex align-items-center">
              <div>
                <span className="text-muted ">33 likes</span>
                <span className="pl-10"></span>
                <span className="text-muted ml-3">4 comments</span>
              </div>
            </div>
            {showButtons && (
              <div className="d-flex align-items-center pt-2  ">
                
                <Link to={`/myposts/${id}/edit`}
            className="btn btn-warning btn-sm me-2"
            style={{ width: "80px" }}
          >
            Edit
          </Link>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  style={{ width: "80px" }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

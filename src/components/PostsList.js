import PostCard from "./PostCard.js";
function PostsList({posts}){
  

   
    return(
        <div className="container mt-4">
      <div className="col justify-content-center">
        {console.log("my posts are " + posts)}
        {posts.map((data) => (
          
          <div className="col-md-4" key={data._id}>
            
            <PostCard

              // username={post.username}
              caption={data.caption}
              imageUrl={data.imageUrl}
             
            />
      
          </div>
        ))}
      </div>
    </div>
    )
}
export default PostsList
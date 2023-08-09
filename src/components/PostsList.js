import PostCard from "./PostCard.js";

function PostsList({ posts , showButtons }) {
 
  return (
    <div className="container mt-4">

     
        {posts.map((data) => (
          <div key={data._id}>
            <PostCard
              // username={post.username}
              caption={data.caption}
              imageUrl={data.imageUrl}
              showButtons={showButtons}
              id={data._id}
            />
        
          </div>
        ))}
      </div>
 
  );
}
export default PostsList;

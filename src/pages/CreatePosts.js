import PostsForm from "../components/PostsForm";


function CreatePosts() {
  return (
    <div>
      <h1>Create posts</h1>
      <PostsForm method="post" />
    </div>
  );
}

export default CreatePosts;

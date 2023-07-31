import CreatePostsForm from "../components/createPostsForm";

function CreatePosts() {
  return (
    <div>
      <h1>Create posts</h1>
      <CreatePostsForm method="post" />
    </div>
  );
}

export default CreatePosts;

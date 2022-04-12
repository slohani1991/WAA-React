import Post from "../../Component/Post/post";

const Posts = (props) => {
  const posts = props.posts.map((post, index) => {
    return (
      <div key={index} className="col-lg-4 mt-2 float-left">
        <Post
          id={post.id}
          title={post.title}
          author={post.author}
          key={index}
          index={index}
          onClickedEvent={props.onClickEvent}
        ></Post>
      </div>
    );
  });
  return posts;
};
export default Posts;

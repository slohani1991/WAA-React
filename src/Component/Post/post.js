const Post = (props) => {
  return (
    <div
      className="col-xs-1-12"
      onClick={() => props.onClickedEvent(props.index)}
    >
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">ID : {props.id}</h6>
          <h3 className="card-title">Title : {props.title}</h3>
          <p className="card-text">Author : {props.author}</p>
        </div>
      </div>
    </div>
  );
};
export default Post;

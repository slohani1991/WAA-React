const UpdatePost = (props) => {
  return (
    <div className="form-group">
      <label>Title</label>
      <input
        type="text"
        className="form-control"
        name="title"
        id="title"
        defaultValue={props.post.title}
        aria-describedby="helpId"
      />
      <input
        name="submit"
        id="submit"
        className="btn btn-primary m-2"
        type="button"
        value={"update"}
        onClick={() =>
          props.onClickEvent(document.getElementById("title").value, 0)
        }
      />
    </div>
  );
};

export default UpdatePost;

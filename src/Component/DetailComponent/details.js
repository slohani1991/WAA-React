const Details = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Author : {props.author}
        </h6>
        <p className="card-text">{props.detail}</p>
        <a href="#" className="card-link">
          Edit
        </a>
        <a href="#" className="card-link">
          Delete
        </a>
      </div>
    </div>
  );
};

export default Details;

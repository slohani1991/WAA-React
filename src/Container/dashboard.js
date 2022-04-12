import { useState } from "react";
import Posts from "./Posts/posts";
import UpdatePost from "../Component/UpdatePost/updatePost";
import Details from "../Component/DetailComponent/details";

const Dashboard = (props) => {
  const [post, setPost] = useState([
    {
      id: 111,
      title: "Hapiness",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "John",
    },
    {
      id: 112,
      title: "MIU",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Dean",
    },
    {
      id: 113,
      title: "Enjoy Life",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      author: "Jasmine",
    },
  ]);

  const [loadDetailData, setLoadDetailData] = useState(post[0]);

  const updateLoadedDetailDataHandler = (index) => {
    setLoadDetailData(post[index]);
  };

  const clickedEvent = (title, index) => {
    if (title !== "") {
      const updatedData = {
        id: post[index].id,
        title: title,
        author: post[index].author,
        details: post[index].details,
      };

      const newData = [...post];
      newData[index] = updatedData;
      setPost(newData);
    } else {
      alert("Enter Title to update !!!");
    }
  };

  return (
    <div className="col-md-12">
      <h1>Welcome to Assignment Section</h1>
      <Posts posts={post} onClickEvent={updateLoadedDetailDataHandler}></Posts>
      <div className="col-lg-12 float-left">
        <UpdatePost post={post[0]} onClickEvent={clickedEvent}></UpdatePost>
      </div>

      <Details
        title={loadDetailData.title}
        author={loadDetailData.author}
        detail={loadDetailData.details}
      ></Details>
    </div>
  );
};
export default Dashboard;

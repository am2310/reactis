import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Home";

const PostCard = (props) => {
  const data = useContext(UserContext);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const dummyArray = data.data.filter((item) => item.id !== id);
    data.setData(dummyArray);
  };
  const handleEdit = () => {
    navigate("editPost", { state: { id: props.id } });
  };
  const handleView = (id) => {
    navigate("detailed", { state: { id: props.id } });
  };
  return (
    <div className="PostCard">
      <div className="Wrapper">
        <h2 className="PostCard-heading">{props.title}</h2>
        <p className="PostCard-description">
          {props.description.substring(0, 256)}
          {"{...}"}
        </p>
      </div>
      <div className="Wrap-false btn-group">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => handleDelete(props.id)}>Delete</button>
        <button onClick={() => handleView(props.id)}>View</button>
      </div>
    </div>
  );
};
export default PostCard;

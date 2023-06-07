import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddPost = (props) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = () => {
    const data = {
      title: title,
      description: description,
    };
    props.func(data);
    navigate("/");
  };
  return (
    <div className="AddPost Wrapper">
      <div className="Wrapper">
        <label htmlFor="">Title</label>
        <input type="text" onChange={handleTitle} value={title} />
      </div>
      <div className="Wrapper">
        <label htmlFor="">Description</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="8"
          onChange={handleDescription}
          value={description}
        ></textarea>
      </div>
      <button className="btn-save" onClick={handleSubmit}>Save</button>
    </div>
  );
};
export default AddPost;

import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./Home";
const EditPost = (props) => {
  const data = useContext(UserContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const location = useLocation();
  const { id } = location.state;
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = () => {
    const editData = {
      id: location.state.id,
      title: title,
      description: description,
    };
    const dummyArray = data.data.filter((item) => item.id !== id);
    dummyArray.push(editData);
    data.setData(dummyArray);
    navigate("/");
  };
  useEffect(() => {
    const filterItem = data.data.filter((item) => item.id === id);
    setTitle(filterItem[0].title);
    setDescription(filterItem[0].description);
  },[]);
  return (
    <div className="AddPost">
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
export default EditPost;

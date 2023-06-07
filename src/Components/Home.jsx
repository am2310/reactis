import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "./AddPost";
import Detailed from "./Detailed";
import EditPost from "./EditPost";
import Post from "./Post";
const UserContext = createContext();
const Home = () => {
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);
  const add = (childData) => {
    childData.id = counter;
    setCounter(counter + 1);
    const dummyArray = data;
    dummyArray.push(childData);
    setData(dummyArray);
  };
  
  return (
    <div className="Home Wrapper">
      <UserContext.Provider value={{data,setData}}>
        <Routes>
          <Route path="" element={<Post/>}></Route>
          <Route path="addPost" element={<AddPost func={add} />}></Route>
          <Route path="editPost" element={<EditPost />}></Route>
          <Route path="detailed" element={<Detailed />}></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
};
export default Home;
export {UserContext};

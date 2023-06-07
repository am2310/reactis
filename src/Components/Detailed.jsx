import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "./Home";

const Detailed = () => {
    const location = useLocation();
    const data = useContext(UserContext);
    const [id,setId] = useState("");
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    useEffect(()=> {
        const {id} = location.state;
        const filterResult = data.data.filter((item)=> item.id === id);
        setId(id);
        setTitle(filterResult[0].title);
        setDescription(filterResult[0].description);
    },[])
    return(
        <div className="Detailed">
            <div>ID : {id}</div>
            <div className="Detailed-title">Title : {title}</div>
            <div className="Detailed-description">Description : {description}</div>
        </div>
    )
}
export default Detailed;
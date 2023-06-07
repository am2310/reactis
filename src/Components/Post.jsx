import React, { useContext } from "react";
import { UserContext } from "./Home";
import PostCard from "./PostCard";

const Post = () => {
  const data = useContext(UserContext);
  return (
    <div className="Post Wrap-false">
      {data.data &&
        data.data.map((item) => {
          return (
            <PostCard
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
    </div>
  );
};
export default Post;

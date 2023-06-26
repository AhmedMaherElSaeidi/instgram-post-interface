import React from "react";
import users from "../../core/Data";
import PostCard from "../PostCard/PostCard";

const PostCards = () => {
  const getRndm = () => Math.round(Math.random() * 100000 + 1000);

  return users.map((user, index) => {
    return (
      <PostCard
        key={index}
        name={user.name}
        location={user.origin}
        profileIMG={user.profile}
        post_image={user.postIMG}
        likesCount={getRndm()}
        commentsCount={getRndm()}
        username={user.email.split("@")[0]}
        description={user.postDesc}
        className="mb-1"
      />
    );
  });
};

export default PostCards;

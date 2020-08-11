import React, { useState, useEffect } from "react";
import "../css/feed.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Tweetbox from "./Tweetbox";
import Post from "./Post";
import db from "../firebaseApp";
import FlipMove from "react-flip-move";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
        <StarBorderIcon className="starIcon" />
      </div>
      <Tweetbox />
      <FlipMove>
        {posts?.map((post) => (
          <Post
            key={post.text} //Just to save time, key shuold be from firebase
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            avatar={post.avatar}
            image={post.image}
            text={post.text}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;

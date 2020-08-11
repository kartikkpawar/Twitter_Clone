import React, { useState } from "react";
import "../css/tweetbox.css";
import { Button, Avatar } from "@material-ui/core";
import Post from "./Post";
import db from "../firebaseApp";
import firebase from "firebase";

const Tweetbox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Kartikk Pawar",
      userName: "kartikk_pawar",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://pbs.twimg.com/profile_images/1173633091933372416/YkpEiCWQ_400x400.jpg",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetbox">
      <form action="">
        <div className="tweetboxInput">
          <Avatar src="https://pbs.twimg.com/profile_images/1173633091933372416/YkpEiCWQ_400x400.jpg"></Avatar>
          <input
            type="text"
            placeholder="What's happening"
            value={tweetMessage}
            onChange={(e) => {
              setTweetMessage(e.target.value);
            }}
          />
        </div>
        <div className="inputImage">
          <input
            type="text"
            placeholder="Enter Image Url"
            value={tweetImage}
            onChange={(e) => {
              setTweetImage(e.target.value);
            }}
          />
        </div>
        <Button
          className="tweetboxTweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default Tweetbox;

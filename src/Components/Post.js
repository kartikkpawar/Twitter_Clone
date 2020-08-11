import React, { forwardRef } from "react";
import "../css/post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, userName, verified, text, avatar, image }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="postAvatar">
          <Avatar src={avatar}></Avatar>
        </div>
        <div className="postBody">
          <div className="postHeader">
            <div className="postHeaderText">
              <h3>
                {displayName}
                <span className="postHeaderSpecial">
                  {verified && <VerifiedUserIcon className="postBadge" />}@
                  {userName}
                </span>
              </h3>
            </div>
            <div className="postHeaderDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="postFooter">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" className="rptBtn" />
            <FavoriteBorderIcon fontSize="small" color="secondary" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;

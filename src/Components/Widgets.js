import React from "react";
import "../css/widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgetsInput">
        <SearchIcon className="widgetSearchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgetsWidgetContainer">
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId={"1290950760352473093"} />
        <TwitterTweetEmbed tweetId={"1292049597360033794"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TomCruise"
          option={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.instagram.com/kartikk_pawar/"}
          options={{ text: "Join him up on Instagram", via: "kartikk_pawar" }}
        />
      </div>
    </div>
  );
};

export default Widgets;

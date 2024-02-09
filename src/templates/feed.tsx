import React from "react";
import "../styles/feed.css";
import SearchFeed from "./searchnav";

// Declara los props
type FeedProps = {
  characterinfo: any[];
};

const Feed: React.FC<FeedProps> = ({ characterinfo }) => {
  return (
    <div className="mainfeed">
      <SearchFeed characterinfo={characterinfo} />

      <div className="mainContent"></div>

      <div className="lastestContent"></div>
    </div>
  );
};

export default Feed;

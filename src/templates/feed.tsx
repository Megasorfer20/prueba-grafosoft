import React from "react";
import "../styles/feed.css";
import SearchFeed from "./searchnav";
import TheLastest from "./thelastest";
import MainContent from "./maincontent";

// Declara los props
type FeedProps = {
  characterinfo: any[];
};

const Feed: React.FC<FeedProps> = ({ characterinfo }) => {
  return (
    <div className="mainfeed">
      <SearchFeed characterinfo={characterinfo} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <MainContent characterinfo={characterinfo} />
        <TheLastest characterinfo={characterinfo} />
      </div>
    </div>
  );
};

export default Feed;

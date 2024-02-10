import React from "react";
import "../styles/maincontent.css";

// Declara los props
type MainContentProps = {
  characterinfo: any[];
};

const MainContent: React.FC<MainContentProps> = ({ characterinfo }) => {
  return (
    <div className="mainContent"></div>
  );
};

export default MainContent;

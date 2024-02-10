import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import EmailIcon from "../elements/email.png";
import NotificationIcon from "../elements/notification.png";
import "../styles/searchnav.css";

// Declara los props
type SearchFeedProps = {
  characterinfo: any[];
};

const SearchFeed: React.FC<SearchFeedProps> = ({ characterinfo }) => {
  const [profilecharacter, setPorfileCharacter] = useState<any>(null);

  useEffect(() => {
    if (characterinfo.length > 0) {
      setPorfileCharacter(characterinfo[0]);
    }
  }, [characterinfo]);

  return (
    <div className="nav-search-porfile">
      <div className="navigation">
        <FaSearch className="iconsearch" />
        <input
          type="search"
          name="search"
          id="search"
          className="SearchBar"
          placeholder="Buscar por libros, perosnas o artículos"
        />
      </div>
      <div className="porfile">
        <div className="porfile-buttons">
          <img
            src={NotificationIcon}
            alt="Notifications"
            className="iconNavProfile notti"
          />
          <img src={EmailIcon} alt="Email" className="iconNavProfile email" />
        </div>
        <div className="user-porfile">
          <h2 style={{ color: "#808080" }}>
            {profilecharacter && profilecharacter.name}
          </h2>
          <img
            src={profilecharacter && profilecharacter.image}
            alt="User"
            className="profilePhoto"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFeed;

import React from "react";
import "../style/SideBar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Jacques Rocks</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar_addChannel" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;

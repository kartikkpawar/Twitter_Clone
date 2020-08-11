import React from "react";
import "../css/sidebarOption.css";

const SidebarOption = ({ Icon, text, active }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOptionActive"}`}>
      <Icon />
      <h2> {text} </h2>
    </div>
  );
};

export default SidebarOption;

import React from "react";
import { slide as Menu } from "react-burger-menu";
import { withStyles } from "@material-ui/core/styles";

const styles = {};

function showSettings(event) {
  event.preventDefault();
}

function SideMenu(props) {
  return (
    <Menu>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
}

export default withStyles(styles)(SideMenu);

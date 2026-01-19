import React, { useState } from "react";
import "../styles/Navbar.css"

const Navbar = () => {
    //state
const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">MyApp</h2>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      <div className={open ? "menu open" : "menu"}>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Notifications</li>
          <li>Help</li>
          <li>Logout</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

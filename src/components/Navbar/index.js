import "./index.scss";
import NavLink from "../NavLink";
import RegularBtn from "../RegularBtn";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);

  useEffect(() => {
    if (menuOpen)
      setTimeout(() => {
        setMenuOpen(false);
        setCloseMenu(false);
      }, 500);
  }, [closeMenu]);

  return (
    <div className="navbar">
      <div className="menu-btn" onClick={() => setMenuOpen(true)}>
        <RegularBtn>Menu</RegularBtn>
      </div>

      <div
        className={`${"menu"} ${menuOpen ? ` ${"menu-show"}` : ""} ${
          closeMenu ? ` ${"menu-close"}` : ""
        }`}
      >
        <div className="menu-bg" />

        <div className="menu-content-container">
          <div>
            {/* <div className="close-btn" onClick={() => setCloseMenu(true)}>
              <RegularBtn>Close Menu</RegularBtn>
            </div> */}

            <ul className="navbar-nav">
              <li className="nav-link">
                <NavLink to="#projects">Projects</NavLink>
              </li>

              <li className="nav-link">
                <NavLink to="#about">About</NavLink>
              </li>

              <li className="nav-link">
                <NavLink to="#contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

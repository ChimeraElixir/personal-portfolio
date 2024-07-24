import React from "react";
import useHandleClick from "../useHandleClick";
import { navItems } from "../../../data";

const Navbar = () => {
  useHandleClick();

  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        {navItems.map((navItem, index) => (
          <li className='navbar-item' key={index}>
            <button className='navbar-link' data-nav-link>
              {navItem.value}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
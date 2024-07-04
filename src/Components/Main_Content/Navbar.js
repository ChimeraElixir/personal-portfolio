import React from "react";

const navItems = [
  {
    value: "About",
  },
  {
    value: "Resume",
  },
  {
    value: "Portfolio",
  },
  {
    value: "Blog",
  },
  {
    value: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navabr-list'>
        {navItems.map((navItem) => {
          return (
            <li className='navbar-item'>
              <button className='navbar-link' data-nav-link>
                {navItem.value}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

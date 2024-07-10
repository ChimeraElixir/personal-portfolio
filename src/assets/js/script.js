import React, { useState } from 'react';

const ChangePage = () => {
  const [activePage, setActivePage] = useState('home');

  const handleNavClick = (page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };
}
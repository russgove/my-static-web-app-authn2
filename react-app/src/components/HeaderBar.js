import React from 'react';
import HeaderBarBrand from './HeaderBarBrand';

const HeaderBar = () => (
  <header>
    YO
    <nav
      className="navbar has-background-dark is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderBarBrand />
    </nav>
  </header>
);

export default HeaderBar;

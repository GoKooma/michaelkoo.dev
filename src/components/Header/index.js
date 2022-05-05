/* eslint-disable */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header
    className="flex flex-row items-center justify-between mx-8 py-4 text-base text-theme-cream no-underline h-[75px]"
  >
    <div className="relative">
      <Link
        to="/"
        className=""
      >
        <h2 className="text-theme-cream text-4xl">Michael Koo</h2>
      </Link>
    </div>
    <nav className="relative w-[15%] hidden">
      <menu className="flex flex-row items-center justify-around text-theme-cream">
        <li>
          <Link
            to="/"
            className=""
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className=""
          >
            About
          </Link>
        </li>
      </menu>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

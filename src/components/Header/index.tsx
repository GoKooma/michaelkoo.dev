/* eslint-disable */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => (
  <header
    className="flex flex-row items-center justify-between py-4 text-base text-theme-green no-underline h-[75px] max-w-[1145px] mt-8 px-4 mx-auto"
  >
    <div className="relative">
      <Link
        to="/"
        className=""
      >
        <StaticImage
          src="../../images/mk-favicon.png"
          alt="Michaelkoo.dev Logo"
          placeholder="tracedSVG"
          layout="fixed"
          width={35}
        />
        {/* <h2 className="text-theme-pop text-xl">
          Michael Koo
        </h2> */}
      </Link>
    </div>
    <nav className="relative w-[15%] hidden">
      <menu className="flex flex-row items-center justify-around text-theme-green">
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

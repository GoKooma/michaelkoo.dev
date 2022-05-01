/* eslint-disable */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: '0 auto',
      padding: 'var(--space-4) var(--size-gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: 'var(--color-text)',
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: 'var(--font-sm)',
        textDecoration: 'none',
        color: 'var(--color-text)',
      }}
    >
      Michael Koo
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;

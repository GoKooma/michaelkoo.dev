import * as React from 'react';
// import PropTypes from 'prop-types';

const Footer = () => (
  <footer
    style={{
      margin: '0 auto',
      padding: 'var(--space-4) var(--size-gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 'var(--font-sm)',
    }}
    className="w-full"
  >
    ©
    {new Date().getFullYear()}
    {' '}
    &middot; Michael Koo
  </footer>
);

export default Footer;

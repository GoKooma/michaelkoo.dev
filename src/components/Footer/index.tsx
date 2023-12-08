import * as React from 'react';
// import PropTypes from 'prop-types';

const Footer = () => (
  <footer
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 'var(--font-sm)',
    }}
    className="w-full my-4 max-w-[1145px] px-4 mx-auto"
  >
    ©2022 &middot; Michael Koo
  </footer>
);

export default Footer;

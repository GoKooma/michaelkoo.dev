/* eslint-disable */
import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Seo from '../components/seo';
import * as styles from '../components/index.module.css';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <h1 className="text-xl">Michael Koo's home page. Initial set up is done!</h1>
  </>
)

export default IndexPage

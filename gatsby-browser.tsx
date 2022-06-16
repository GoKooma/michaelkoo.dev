/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

/* eslint-disable react/function-component-definition */
// You can delete this file if you're not using it
import React from 'react';
import './src/css/index.css';
import Layout from './src/components/Layout';

export const wrapPageElement = ({
  element,
  props,
}) => (
  <Layout {...props}>
    {element}
  </Layout>
);

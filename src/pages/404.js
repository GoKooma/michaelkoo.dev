import * as React from 'react';
import { Link } from 'gatsby';

import Seo from '../components/seo';

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <div>
      <h1 className="text-4xl font-bold text-pink mb-12">404</h1>
      <p className="mb-12">Uh oh, your requested page was not found.</p>
      <Link
        to="/"
        className="p-4 rounded-lg bg-theme-cream text-theme-green font-bold"
      >
        Go back home
      </Link>
    </div>
  </>
);

export default NotFoundPage;

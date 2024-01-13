import React from 'react';
import { HeadFC, Link } from 'gatsby';

const NotFoundPage = () => (
  <main>
    <title>Not found</title>
    <Link to="/">Go home</Link>
  </main>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

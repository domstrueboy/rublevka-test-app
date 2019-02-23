import React from 'react';
import './Page.css';

const Page = ({ match }) => (
  <div>
    <h3>{match.params.page}</h3>
  </div>
);

export default Page;
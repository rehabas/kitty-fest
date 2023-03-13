import React from 'react';

import Stories from '../components/Stories';
import Posts from '../components/Posts';

const Home = () => (
  <div className="py-5 px-8">
    <Stories />
    <Posts />
  </div>
);

export default Home;

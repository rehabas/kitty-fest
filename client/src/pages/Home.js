import React from 'react';

import Stories from '../components/Stories';
import Posts from '../components/Posts';

const Home = () => (
  <div className="mobile:p-3 tablet:p-5 laptop:py-5 laptop:px-8">
    <Stories />
    <Posts />
  </div>
);

export default Home;

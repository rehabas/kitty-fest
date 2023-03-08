import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Layout = () => (
  <div>
    <Navbar />
    <div className="grid grid-cols-6">
      <LeftBar />
      <div className="col-span-3 bg-soft-white dark:bg-dark-charcoal">
        <Outlet />
      </div>
      <RightBar />
    </div>
  </div>
);

export default Layout;

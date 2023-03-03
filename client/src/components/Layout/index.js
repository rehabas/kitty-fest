import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Navbar';
import LeftBar from './LeftBar';
import RightBar from './RightBar';

const Layout = () => (
  <div>
    <Navbar />
    <div className="flex">
      <LeftBar />
      <div className="grow-6 bg-soft-white dark:bg-dark-charcoal">
        <Outlet />
      </div>
      <RightBar />
    </div>
  </div>
);

export default Layout;

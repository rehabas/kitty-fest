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
      <Outlet />
      <RightBar />
    </div>
  </div>
);

export default Layout;

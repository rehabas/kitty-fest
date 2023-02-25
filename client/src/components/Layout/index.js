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
      <div className="grow-6">
        <Outlet />
      </div>
      <RightBar />
    </div>
  </div>
);

export default Layout;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  DarkModeOutlined,
  GridViewOutlined,
  SearchOutlined,
  PersonOutlined,
  MailOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';

const Navbar = () => (
  <div className="flex justify-between items-center py-3 px-5 border-b border-light-gray sticky top-0 bg-white z-50">
    <div className="flex space-x-8 items-center">
      <Link to="/">
        <span className="text-xl font-bold text-rebecca-purple">kittyfest</span>
      </Link>
      <HomeOutlined />
      <DarkModeOutlined />
      <GridViewOutlined />
      <div className="flex items-center space-x-[10px] border rounded p-1 border-light-gray">
        <SearchOutlined />
        <input type="text" placeholder="Search" className="w-[500px]" />
      </div>
    </div>
    <div className="flex items-center space-x-5">
      <PersonOutlined />
      <MailOutlined />
      <NotificationsOutlined />
      <div className="flex items-center space-x-[10px]">
        <img
          src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="avatar"
          className="h-[30px] rounded-full object-cover"
          width={30}
        />
        <span>John Doe</span>
      </div>
    </div>
  </div>
);

export default Navbar;

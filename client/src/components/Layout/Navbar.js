import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  DarkModeOutlined,
  WbSunnyOutlined,
  GridViewOutlined,
  SearchOutlined,
  PersonOutlined,
  MailOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';

import { DarkModeContext } from '../../context/DarkModeContext';

const Navbar = () => {
  const { theme, toggle } = useContext(DarkModeContext);
  return (
    <div className="flex justify-between items-center py-3 px-5 border-b border-light-gray dark:border-medium-gray sticky top-0 bg-white dark:bg-very-dark-gray dark:text-white-smoke z-50">
      <div className="flex space-x-8 items-center">
        <Link to="/">
          <span className="text-xl font-bold text-rebecca-purple dark:text-white">
            kittyfest
          </span>
        </Link>
        <HomeOutlined />
        {theme === 'dark' ? (
          <WbSunnyOutlined onClick={toggle} />
        ) : (
          <DarkModeOutlined onClick={toggle} />
        )}

        <GridViewOutlined />
        <div className="flex items-center space-x-[10px] border rounded p-1 border-light-gray dark:border-medium-gray">
          <SearchOutlined />
          <input
            type="text"
            placeholder="Search"
            className="hidden tablet:inline-block laptop:w-[500px] tablet:w-[200px] bg-transparent focus:outline-none"
          />
        </div>
      </div>
      <div className="hidden tablet:flex items-center space-x-5">
        <PersonOutlined />
        <MailOutlined />
        <NotificationsOutlined />
        <div className="flex tablet:max-laptop:hidden items-center space-x-[10px]">
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
};

export default Navbar;

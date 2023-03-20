import React from 'react';
import {
  FacebookTwoTone,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  Place,
  Language,
  EmailOutlined,
  MoreVert,
} from '@mui/icons-material';

import Posts from '../components/Posts';

const Profile = () => (
  <div className="bg-soft-white dark:bg-dark-charcoal">
    <div className="w-full h-72 relative">
      <img
        src="https://images.pexels.com/photos/87812/pexels-photo-87812.jpeg"
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src="https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="w-40 h-40 rounded-full object-cover absolute left-0 right-0 m-auto top-[198px]"
      />
    </div>
    <div className="py-5 px-12">
      <div className="grid grid-cols-3 items-center mb-5 h-52 shadow-post rounded-[20px] dark:bg-very-dark-gray dark:text-white-smoke p-8">
        <div className="flex space-x-2">
          <a
            href="http://facebook.com"
            className="text-dark-gray dark:text-light-gray flex items-center"
          >
            <FacebookTwoTone />
          </a>
          <a
            href="http://facebook.com"
            className="text-dark-gray dark:text-light-gray flex items-center"
          >
            <Instagram />
          </a>
          <a
            href="http://facebook.com"
            className="text-dark-gray dark:text-light-gray flex items-center"
          >
            <Twitter />
          </a>
          <a
            href="http://facebook.com"
            className="text-dark-gray dark:text-light-gray flex items-center"
          >
            <LinkedIn />
          </a>
          <a
            href="http://facebook.com"
            className="text-dark-gray dark:text-light-gray flex items-center"
          >
            <Pinterest />
          </a>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <span className="text-2xl leading-9">Jane Doe</span>
          <div className="flex justify-around w-full">
            <div className="flex justify-between items-center space-x-1 text-dark-gray dark:text-light-gray">
              <Place />
              <span className="text-xs">USA</span>
            </div>
            <div className="flex justify-between items-center space-x-1 text-dark-gray dark:text-light-gray">
              <Language />
              <span className="text-xs">kitty fest</span>
            </div>
          </div>
          <button
            type="button"
            className="bg-light-navy text-white py-[6px] px-4 rounded"
          >
            follow
          </button>
        </div>
        <div className="flex justify-end space-x-2">
          <EmailOutlined />
          <MoreVert />
        </div>
      </div>
      <Posts />
    </div>
  </div>
);

export default Profile;

import React from 'react';

const RightBar = () => (
  <div className="col-span-2 p-5 sticky top-[59px] h-[calc(100vh-59px)] overflow-y-auto no-scrollbar bg-soft-white dark:bg-dark-charcoal">
    <div className="shadow-item p-5 mb-5 bg-white dark:bg-very-dark-gray">
      <span className="text-gray">Suggestions For You</span>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm font-semibold dark:text-white-smoke">
            Jane Doe
          </span>
        </div>
        <div className="flex items-center space-x-[10px]">
          <button
            type="button"
            className="p-[5px] text-white bg-light-navy focus:outline-none"
          >
            follow
          </button>
          <button
            type="button"
            className="p-[5px] text-white bg-fire-opal focus:outline-none"
          >
            dismiss
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm font-semibold dark:text-white-smoke">
            Jane Doe
          </span>
        </div>
        <div className="flex items-center space-x-[10px]">
          <button
            type="button"
            className="p-[5px] text-white bg-light-navy focus:outline-none"
          >
            follow
          </button>
          <button
            type="button"
            className="p-[5px] text-white bg-fire-opal focus:outline-none"
          >
            dismiss
          </button>
        </div>
      </div>
    </div>
    <div className="shadow-item p-5 mb-5 bg-white dark:bg-very-dark-gray">
      <span className="text-gray">Latest Activities</span>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-gray dark:text-light-gray">
            <span className="text-sm font-semibold text-black dark:text-white-smoke mr-2">
              Jane Doe
            </span>
            changed their cover picture
          </p>
        </div>
        <div>
          <span className="text-gray dark:text-white-smoke text-sm">
            1 min ago
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-gray dark:text-light-gray text">
            <span className="text-sm font-semibold text-black dark:text-white-smoke mr-2">
              Jane Doe
            </span>
            liked a post
          </p>
        </div>
        <div>
          <span className="text-gray dark:text-white-smoke text-sm">
            1 min ago
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-gray dark:text-light-gray">
            <span className="text-sm font-semibold text-black dark:text-white-smoke mr-2">
              Jane Doe
            </span>
            liked a comment
          </p>
        </div>
        <div>
          <span className="text-gray dark:text-white-smoke text-sm">
            1 min ago
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-gray dark:text-light-gray">
            <span className="text-sm font-semibold text-black dark:text-white-smoke mr-2">
              Jane Doe
            </span>
            posted
          </p>
        </div>
        <div>
          <span className="text-gray dark:text-white-smoke text-sm">
            1 min ago
          </span>
        </div>
      </div>
    </div>
    <div className="shadow-item p-5 mb-5 bg-white dark:bg-very-dark-gray">
      <span className="text-gray">Online Friends</span>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3 relative">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-3 h-3 bg-lime-green rounded-full absolute top-0 left-4" />
          <span className="text-sm font-semibold text-black dark:text-white-smoke mr-2">
            Jane Doe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3 relative">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-3 h-3 bg-lime-green rounded-full absolute top-0 left-4" />
          <span className="text-sm font-semibold text-black dark:text-white-smoke mr-2">
            Jane Doe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3 relative">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-3 h-3 bg-lime-green rounded-full absolute top-0 left-4" />
          <span className="text-sm font-semibold text-black dark:text-white-smoke mr-2">
            Jane Doe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3 relative">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-3 h-3 bg-lime-green rounded-full absolute top-0 left-4" />
          <span className="text-sm font-semibold text-black dark:text-white-smoke mr-2">
            Jane Doe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-3 relative">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-3 h-3 bg-lime-green rounded-full absolute top-0 left-4" />
          <span className="text-sm font-semibold text-black dark:text-white-smoke mr-2">
            Jane Doe
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default RightBar;

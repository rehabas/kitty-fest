import React from 'react';

const RightBar = () => (
  <div className="grow-3 p-5 sticky top-[70px] h-[calc(100vh-70px)] overflow-y-auto no-scrollbar">
    <div className="shadow-item p-5 mb-5">
      <span className="text-gray-500">Suggestions for you</span>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-5">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm font-semibold">Jane Doe</span>
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
        <div className="flex items-center space-x-5">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm font-semibold">Jane Doe</span>
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
    <div className="shadow-item p-5 mb-5">
      <span className="text-gray-500">Latest Activities</span>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-5">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-gray-500">
            <span className="text-sm font-semibold text-black mr-2">
              Jane Doe
            </span>
            changed their cover picture
          </p>
        </div>
        <div>
          <span className="text-gray-500">1 min ago</span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-5">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-gray-500">
            <span className="text-sm font-semibold text-black mr-2">
              Jane Doe
            </span>
            liked a post
          </p>
        </div>
        <div>
          <span className="text-gray-500">1 min ago</span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-5">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-gray-500">
            <span className="text-sm font-semibold text-black mr-2">
              Jane Doe
            </span>
            liked a comment
          </p>
        </div>
        <div>
          <span className="text-gray-500">1 min ago</span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-5">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <p className="text-gray-500">
            <span className="text-sm font-semibold text-black mr-2">
              Jane Doe
            </span>
            posted
          </p>
        </div>
        <div>
          <span className="text-gray-500">1 min ago</span>
        </div>
      </div>
    </div>
    <div className="shadow-item p-5 mb-5">
      <span className="text-gray-500">Online Friends</span>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-5 relative">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-3 h-3 bg-lime-green rounded-full absolute top-0 left-[10px]" />
          <span className="text-sm font-semibold text-black mr-2">
            Jane Doe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-5 relative">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-3 h-3 bg-lime-green rounded-full absolute top-0 left-[10px]" />
          <span className="text-sm font-semibold text-black mr-2">
            Jane Doe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-5 relative">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-3 h-3 bg-lime-green rounded-full absolute top-0 left-[10px]" />
          <span className="text-sm font-semibold text-black mr-2">
            Jane Doe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-5 relative">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-3 h-3 bg-lime-green rounded-full absolute top-0 left-[10px]" />
          <span className="text-sm font-semibold text-black mr-2">
            Jane Doe
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center space-x-5 relative">
          <img
            src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="w-3 h-3 bg-lime-green rounded-full absolute top-0 left-[10px]" />
          <span className="text-sm font-semibold text-black mr-2">
            Jane Doe
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default RightBar;

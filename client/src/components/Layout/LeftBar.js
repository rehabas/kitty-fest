import React from 'react';

import Courses from '../../assets/leftBarIcons/courses.png';
import Events from '../../assets/leftBarIcons/events.png';
import Friends from '../../assets/leftBarIcons/friends.png';
import Fund from '../../assets/leftBarIcons/fundraiser.png';
import Gallery from '../../assets/leftBarIcons/gallery.png';
import Gaming from '../../assets/leftBarIcons/gaming.png';
import Groups from '../../assets/leftBarIcons/groups.png';
import Market from '../../assets/leftBarIcons/marketplace.png';
import Memories from '../../assets/leftBarIcons/memories.png';
import Messages from '../../assets/leftBarIcons/messages.png';
import Tutorials from '../../assets/leftBarIcons/tutorials.png';
import Videos from '../../assets/leftBarIcons/videos.png';
import Watch from '../../assets/leftBarIcons/watch.png';

const LeftBar = () => (
  <div className="hidden tablet:inline-block p-5 sticky top-[59px] h-[calc(100vh-59px)] overflow-y-auto no-scrollbar dark:bg-very-dark-gray dark:text-white-smoke">
    <div className="flex flex-col space-y-5">
      <div className="flex items-center space-x-[10px]">
        <img
          src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="avatar"
          className="w-[30px] h-[30px] rounded-full object-cover"
        />
        <span className="text-sm">John Doe</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Friends} alt="friends" className="w-[30px]" />
        <span className="text-sm">Friends</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Groups} alt="groups" className="w-[30px]" />
        <span className="text-sm">Groups</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Market} alt="marketplace" className="w-[30px]" />
        <span className="text-sm">Marketplace</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Watch} alt="watch" className="w-[30px]" />
        <span className="text-sm">Watch</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Memories} alt="memories" className="w-[30px]" />
        <span className="text-sm">Memories</span>
      </div>
    </div>
    <hr className="my-4 border-none h-[0.5px] bg-light-gray dark:border-medium-gray" />
    <div className="flex flex-col space-y-5">
      <span className="text-xs">Your shortcuts</span>
      <div className="flex items-center space-x-[10px]">
        <img src={Events} alt="events" className="w-[30px]" />
        <span className="text-sm">Events</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Gaming} alt="gaming" className="w-[30px]" />
        <span className="text-sm">Gaming</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Gallery} alt="gallery" className="w-[30px]" />
        <span className="text-sm">Gallery</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Videos} alt="videos" className="w-[30px]" />
        <span className="text-sm">Videos</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Messages} alt="messages" className="w-[30px]" />
        <span className="text-sm">Messages</span>
      </div>
    </div>
    <hr className="my-4 border-none h-[0.5px] bg-light-gray dark:border-medium-gray" />
    <div className="flex flex-col space-y-5">
      <span className="text-xs">Others</span>
      <div className="flex items-center space-x-[10px]">
        <img src={Fund} alt="fundraiser" className="w-[30px]" />
        <span className="text-sm">Fundraiser</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Tutorials} alt="tutorials" className="w-[30px]" />
        <span className="text-sm">Tutorials</span>
      </div>
      <div className="flex items-center space-x-[10px]">
        <img src={Courses} alt="courses" className="w-[30px]" />
        <span className="text-sm">Courses</span>
      </div>
    </div>
  </div>
);

export default LeftBar;

import React from 'react';

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
    {
      id: 2,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
    {
      id: 3,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
    {
      id: 4,
      name: 'John Doe',
      img: 'https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    },
  ];
  return (
    <div className="grid grid-cols-5 gap-x-2 tablet:max-laptop:gap-x-4 h-10 tablet:h-32 laptop:h-48 tablet:mb-7">
      <div className="overflow-hidden rounded-lg relative mobile:max-tablet:w-12 mobile:max-tablet:h-12 mobile:max-tablet:rounded-full">
        <img
          src="https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover"
        />
        <span className="mobile:max-tablet:hidden absolute bottom-1 left-2 text-white text-sm font-semibold">
          Jane Doe
        </span>
        <button
          type="button"
          className="mobile:max-tablet:top-0 mobile:max-tablet:left-0 mobile:max-tablet:bottom-0 mobile:max-tablet:right-0 mobile:max-tablet:m-auto absolute bottom-7 left-2 text-white bg-light-navy rounded-full w-7 h-7 text-2xl font-semibold flex items-center justify-center outline-none"
        >
          +
        </button>
      </div>
      {stories.map((story) => (
        <div
          key={story.id}
          className="overflow-hidden rounded-lg relative mobile:max-tablet:w-12 mobile:max-tablet:h-12 mobile:max-tablet:rounded-full"
        >
          <img src={story.img} alt="" className="w-full h-full object-cover" />
          <span className="mobile:max-tablet:hidden absolute bottom-1 left-2 text-white text-sm font-semibold">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stories;

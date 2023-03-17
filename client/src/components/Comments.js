import React from 'react';

const Comments = () => {
  const comments = [
    {
      id: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellendus quas obcaecati odit, distinctio, sapiente quae ducimus quia pariatur itaque doloremque',
      name: 'John Doe',
      userId: 1,
      profilePic:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 2,
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellendus quas obcaecati odit',
      name: 'Jane Doe',
      userId: 2,
      profilePic:
        'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-11 gap-5 my-5">
        <img
          src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-10 h-10 rounded-full object-cover self-center"
        />
        <input
          type="text"
          placeholder="write a comment"
          className="col-span-8 bg-transparent p-2 border border-light-gray dark:border-medium-gray focus:outline-none"
        />
        <button
          type="submit"
          className="col-span-2 bg-light-navy text-white rounded-[3px] p-2 focus:outline-none"
        >
          Send
        </button>
      </div>
      {comments.map((comment) => (
        <div className="my-7 grid grid-cols-11 gap-5" key={comment.id}>
          <img
            src={comment.profilePic}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="col-span-7 flex flex-col space-y-[3px]">
            <span className="font-semibold">{comment.name}</span>
            <p className="dark:text-light-gray">{comment.description}</p>
          </div>
          <span className="self-center text-xs text-gray col-span-3">
            1 hour ago
          </span>
        </div>
      ))}
    </div>
  );
};

export default Comments;

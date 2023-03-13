import React from 'react';

import Post from './Post';

function Posts() {
  const posts = [
    {
      id: 1,
      name: 'John Doe',
      userId: 1,
      profilePic:
        'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
      img: 'https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 2,
      name: 'Jane Doe',
      userId: 1,
      profilePic:
        'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description:
        'Architecto repellendus quas obcaecati odit, distinctio, sapiente quae ducimu quia pariatur itaque doloremque, provident vero hic',
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          userId={post.userId}
          profilePic={post.profilePic}
          description={post.description}
          img={post.img}
        />
      ))}
    </div>
  );
}

export default Posts;

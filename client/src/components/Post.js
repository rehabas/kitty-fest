import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  MoreHorizOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  TextsmsOutlined,
  ShareOutlined,
} from '@mui/icons-material';

import Comments from './Comments';

function Post(props) {
  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

  const { name, userId, profilePic, description, img } = props;
  return (
    <div className="shadow-post rounded-[20px] bg-white dark:bg-very-dark-gray text-dark-gray dark:text-white-smoke p-5">
      <div className="flex justify-between items-center">
        <div className="flex space-x-5">
          <img
            src={profilePic}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <Link to={`/profile/${userId}`}>
              <span className="font-semibold">{name}</span>
            </Link>
            <span className="text-xs">a few seconds ago</span>
          </div>
        </div>
        <MoreHorizOutlined />
      </div>
      <div className="my-5">
        <p>{description}</p>
        <img
          src={img}
          alt=""
          className="max-h-[500px] w-full object-cover mt-5"
        />
      </div>
      <div className="flex items-center space-x-5">
        <button
          className="flex items-center space-x-2 text-sm focus:outline-none"
          type="button"
        >
          {liked ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
          <span>12 Likes</span>
        </button>
        <button
          className="flex items-center space-x-2 text-sm focus:outline-none"
          type="button"
          onClick={() => setCommentOpen(!commentOpen)}
        >
          <TextsmsOutlined />
          <span>12 Comments</span>
        </button>
        <button
          className="flex items-center space-x-2 text-sm focus:outline-none"
          type="button"
        >
          <ShareOutlined />
          <span>Share</span>
        </button>
      </div>
      {commentOpen && <Comments />}
    </div>
  );
}

Post.defaultProps = {
  img: undefined,
};

Post.propTypes = {
  name: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  profilePic: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default Post;

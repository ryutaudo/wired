import React from 'react';
import PropTypes from 'prop-types';

const List = ({ posts }) => (
  <div>
    {posts.map(post => (
      <div>{post}</div>
    ))}
  </div>
);

List.propTypes = {
  posts: PropTypes.shape([]).isRequired
};

export default List;

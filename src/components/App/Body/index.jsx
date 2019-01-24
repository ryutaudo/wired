import React, { useState } from 'react';

const Body = () => {
  const [list, setList] = useState([]);
  const [post, setPost] = useState('');

  return (
    <div>
      <input value={post} onChange={event => setPost(event.target.value)} />
      <button
        type="button"
        onClick={() => {
          setList(list.concat(post));
          setPost('');
        }}
      >
        Add Post
      </button>
    </div>
  );
};

export default Body;

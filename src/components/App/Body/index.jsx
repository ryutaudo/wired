import React, { useState } from 'react';

import List from './List';

const Body = () => {
  // const [posts, setPosts] = useState([{ url: 'test blog URL' }]);
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{`You clicked ${count} times`}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Body;

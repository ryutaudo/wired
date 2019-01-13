import React, { useState } from 'react';

const Body = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{`You clicked ${count} times`}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default Body;

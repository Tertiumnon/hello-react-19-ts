import React, { useEffect } from 'react';
import { useState } from 'react';

function PushTheBtn() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.title = `You clicked ${count} times`;
    }, 3000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Push the button
      </button>
      <p>{}</p>
    </div>
  );
}

export default PushTheBtn;

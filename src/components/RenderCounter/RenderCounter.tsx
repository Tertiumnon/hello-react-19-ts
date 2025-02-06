import React, { useRef } from 'react';
import './RenderCounter.css';

function RenderCounter() {
  const renders = useRef(0);
  return <div className="RenderCounter">Whole page render count: {renders.current++}</div>;
}

export default RenderCounter;

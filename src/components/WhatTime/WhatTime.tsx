import React, { useState, useEffect, useCallback } from 'react';

function WhatTime() {
  const getTime = useCallback(() => new Date().toLocaleTimeString(), []);
  const [time, setTime] = useState(getTime());
  const [timeOnPage, setTimeOnPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
      setTimeOnPage(timeOnPage + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [getTime, timeOnPage]);

  return (
    <div>
      <p>Current time: {time}</p>
      <p>Your time on this page: {timeOnPage} s</p>
    </div>
  );
}

export default WhatTime;

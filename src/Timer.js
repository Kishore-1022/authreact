import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime = 300 }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <p className='timer'>
        Session ends : {minutes}:{String(seconds).padStart(2, '0')}
      </p>
    </div>
  );
};

export default Timer;
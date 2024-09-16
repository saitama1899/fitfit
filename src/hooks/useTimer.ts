import { useState, useEffect, useCallback } from 'react';

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      // biome-ignore lint/style/noNonNullAssertion: <explanation>
      clearInterval(interval!);
    }

    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    return () => clearInterval(interval!);
  }, [isActive, time]);

  const start = useCallback(() => {
    setIsActive(true);
  }, []);

  const stop = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setIsActive(false);
    setTime(0);
  }, []);

  return { time, isActive, start, stop, reset };
};

export default useTimer;

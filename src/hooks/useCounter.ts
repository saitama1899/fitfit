import { useState, useCallback } from "react";

const useCounter = (initialCount = 0) => {
	const [count, setCount] = useState(initialCount);

	const increment = useCallback(() => {
		setCount((prevCount) => prevCount + 1);
	}, []);

	const decrement = useCallback(() => {
		setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
	}, []);

	const reset = useCallback(() => {
		setCount(initialCount);
	}, [initialCount]);

	return { count, increment, decrement, reset };
};

export default useCounter;

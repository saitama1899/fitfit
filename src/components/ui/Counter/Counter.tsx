import type React from "react";
import useCounter from "@/hooks/useCounter"; // Asegúrate de que la ruta sea correcta.
import CounterWrapper from "./Counter.style";

interface CounterProps {
	initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
	const { count, increment, decrement } = useCounter(initialCount);

	return (
		<CounterWrapper>
			<div className="series-counter">
				<button type="button" className="decrement" onClick={decrement}>
					-
				</button>
				<span className="count">{count}</span>
				<button type="button" className="increment" onClick={increment}>
					+
				</button>
			</div>
			{/* <button type="button" className="reset" onClick={reset}>
				Reset
			</button> */}
		</CounterWrapper>
	);
};

export default Counter;

import type React from "react";
import useTimer from "@/hooks/useTimer"; // Asegúrate de que la ruta sea correcta.
import TimerWrapper from "./Timer.style";
import { useState } from "react";

interface TimerProps {
	initialTime?: number;
}

const Timer: React.FC<TimerProps> = ({ initialTime = 0 }) => {
	const { time, isActive, start, stop, reset, setIsActive } = useTimer();
	const [holdTimer, setHoldTimer] = useState<NodeJS.Timeout | null>(null);
	const [reseted, setReseted] = useState(false);

	const handleClick = () => {
		if (isActive) {
			stop();
		} else {
			reseted ? setReseted(false) : start();
		}
	};

	const handleHold = () => {
		reset();
		setReseted(true);
	};

	const handleMouseDown = () => {
		setHoldTimer(setTimeout(handleHold, 1000));
	};

	const handleMouseUp = () => {
		if (holdTimer) {
			clearTimeout(holdTimer);
			setHoldTimer(null);
		}
	};

	return (
		<TimerWrapper>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className={`timer-display ${holdTimer ? "active" : ""}`}
				onClick={handleClick}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseLeave={handleMouseUp}
			>
				<span>
					{Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
				</span>
			</div>
		</TimerWrapper>
	);
};

export default Timer;

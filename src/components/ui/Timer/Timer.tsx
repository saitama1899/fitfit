import type React from "react";
import useTimer from "@/hooks/useTimer"; // Asegúrate de que la ruta sea correcta.
import TimerWrapper from "./Timer.style";

interface TimerProps {
	initialTime?: number;
}

const Timer: React.FC<TimerProps> = ({ initialTime = 0 }) => {
	const { time, isActive, start, stop, reset } = useTimer();

	return (
		<TimerWrapper>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className="timer-display"
				onClick={() => {
					if (isActive) {
						stop();
					} else {
						start();
					}
				}}
			>
				<span>
					{Math.floor(time / 60)}:{time % 60 < 10 ? `0${time % 60}` : time % 60}
				</span>
			</div>
			<div className="timer-controls">
				<button type="button" className="reset" onClick={reset}>
					↺
				</button>
			</div>
		</TimerWrapper>
	);
};

export default Timer;

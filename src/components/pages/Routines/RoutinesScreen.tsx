import type React from "react";
import { RoutinesScreenWrapper } from "./RoutinesScreen.style";
import routines from "@/data/routines";

const RoutinesScreen: React.FC = () => {
	return (
		<RoutinesScreenWrapper>
			<h1>Rutinas</h1>
			<div className="routines">
				{routines.map((routine) => (
					<div key={routine.id} className="routine">
						<h2>{routine.name}</h2>
						{/* <p>{routine.description}</p> */}
					</div>
				))}
			</div>
		</RoutinesScreenWrapper>
	);
};

export default RoutinesScreen;

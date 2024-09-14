import type React from "react";
import { RoutinesScreenWrapper } from "./RoutinesScreen.style";
import routines from "@/data/routines";

const RoutinesScreen: React.FC = () => {
	return (
		<RoutinesScreenWrapper>
			<h1>Rutinas</h1>
			<div className="routines">
				{routines.map((routine) => (
					<div
						key={routine.id}
						className="routine"
						style={{
							backgroundImage: `url('./images/categoryBanners/${routine.category}.png')`,
						}}
					>
						<h2>{routine.title}</h2>
						<p>{routine.subtitle}</p>
					</div>
				))}
			</div>
		</RoutinesScreenWrapper>
	);
};

export default RoutinesScreen;

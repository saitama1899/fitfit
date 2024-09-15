import type React from "react";
import { RoutinesScreenWrapper } from "./RoutinesScreen.style";
import routines from "@/data/routines";
import { useRouter } from "next/router";

const RoutinesScreen: React.FC = () => {
	const router = useRouter();

	return (
		<RoutinesScreenWrapper>
			<h2>Rutinas</h2>
			<div className="screen-content routines">
				{routines.map((routine) => (
					<div
						key={routine.id}
						className="routine"
						style={{
							backgroundImage: `url('./images/categoryBanners/${routine.category}.png')`,
						}}
						onClick={() => router.push(`/routines/${routine.id}`)}
						onKeyDown={() => router.push(`/routines/${routine.id}`)}
					>
						<h3>{routine.title}</h3>
						<p>{routine.subtitle}</p>
					</div>
				))}
			</div>
		</RoutinesScreenWrapper>
	);
};

export default RoutinesScreen;

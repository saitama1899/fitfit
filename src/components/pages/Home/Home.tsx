import { useAppContext } from "@/context/AppContext";
import { HomeWrapper } from "./Home.style";
import type React from "react";
import Spinner from "@/components/ui/Spinner/Spinner";

const Home: React.FC = () => {
	const { loading } = useAppContext();
	return (
		<HomeWrapper>
			{loading ? (
				<Spinner />
			) : (
				<>
					<div className="routine">
						<p>Rutina</p>
					</div>
					<div className="options">
						<div className="exercises">
							<img src="./images/kettlebell.png" alt="exercises" />
							<p>Ejercicios</p>
						</div>
						<div className="create">
							<img src="./images/gloves.png" alt="create" />
							<p>Crear</p>
						</div>
					</div>
				</>
			)}
		</HomeWrapper>
	);
};

export default Home;

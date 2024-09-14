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
					<div className="routine">Rutina</div>
					<div>Ejercicios</div>
				</>
			)}
		</HomeWrapper>
	);
};

export default Home;

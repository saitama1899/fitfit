import { useAppContext } from "@/context/AppContext";
import { HomeWrapper } from "./Home.style";
import type React from "react";
import Spinner from "@/components/ui/Spinner/Spinner";
import Link from "next/link";

const Home: React.FC = () => {
	const { loading } = useAppContext();
	return (
		<HomeWrapper>
			{loading ? (
				<Spinner />
			) : (
				<>
					<Link className="routine" href="/routines">
						<h1>Rutina</h1>
					</Link>
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

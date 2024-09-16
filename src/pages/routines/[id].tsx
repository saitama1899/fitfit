import type { ParsedUrlQuery } from "node:querystring";
import { useRouter } from "next/router";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";
import Spinner from "@/components/ui/Spinner/Spinner";
import routines from "@/data/routines";
import categories from "@/data/categories";

import RoutinesWrapper from "./RoutinesWrapper.style";
interface Params extends ParsedUrlQuery {
	id: string;
}

const Routines: React.FC = () => {
	const { loading, setLoading } = useAppContext();
	const router = useRouter();
	const { id } = router.query as Params;
	const [routinesData, setRoutinesData] = useState<Routine[] | null>(null);

	const getRoutines = (id: number): Routine[] => {
		const routinesResult = routines.filter(
			(routine: Routine) => routine.category === id,
		);
		if (!routinesResult) {
			throw new Error(`Routines with category ${id} not found`);
		}
		return routinesResult;
	};

	const getCategoryName = (id: number): string => {
		const category = categories.find((category) => category.id === id);
		if (!category) {
			return "Sin resultados";
		}
		return category.title;
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setLoading(true);
		if (id) {
			setRoutinesData(getRoutines(Number(id)));
			setLoading(false);
		}
	}, [id, setLoading]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<RoutinesWrapper>
			{routinesData ? (
				<>
					<h2>{getCategoryName(Number(routinesData[0]?.category))}</h2>
					<div className="screen-content routines">
						{routinesData.map((routine) => (
							<div
								key={routine.id}
								className="routine"
								style={{
									backgroundImage: `url('/images/categoryBanners/${routine.subcategory}.png')`,
								}}
								onClick={() => router.push(`/routine/${routine.id}`)}
								onKeyDown={() => router.push(`/routine/${routine.id}`)}
							>
								<h3>{routine.title}</h3>
								{routine.subtitle && <p>{routine.subtitle}</p>}
							</div>
						))}
					</div>
				</>
			) : null}
		</RoutinesWrapper>
	);
};

export default Routines;

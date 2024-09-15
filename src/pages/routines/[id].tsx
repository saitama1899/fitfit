import type { ParsedUrlQuery } from "node:querystring";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import routines from "@/data/routines";
import RoutineWrapper from "./RoutineWrapper.style";

interface Params extends ParsedUrlQuery {
	id: string;
}

const Routine: React.FC = () => {
	const { loading, setLoading } = useAppContext();
	const router = useRouter();
	const { id } = router.query as Params;
	const [routine, setRoutine] = useState<Routine | null>(null);

	const pagination = {
		clickable: true,
		renderBullet: (index: number, className: string) =>
			`<span class="${className}">${index + 1}</span>`,
	};

	const getRoutine = (id: number): Routine => {
		const routine = routines.find((routine) => routine.id === id);
		if (!routine) {
			throw new Error(`Routine with id ${id} not found`);
		}
		return routine;
	};

	useEffect(() => {
		setLoading(true);
		if (id) {
			setRoutine(getRoutine(Number(id)));
			setLoading(false);
		}
		// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	}, [id, setLoading, getRoutine]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<RoutineWrapper>
			<h2>{routine?.subtitle}</h2>
			<div className="screen-content">
				{routine?.exercises.map((exercise) => (
					<div className="exercise" key={exercise.id}>
						<h3>{exercise.name}</h3>
						<img src={exercise.img} alt={exercise.name} width={250}/>
						<p>{exercise.description}</p>
						<p>{exercise.sets} sets</p>
						<p>{exercise.reps} reps</p>
						<p>{exercise.weight} kg</p>
						<p>{exercise.rest} seconds rest</p>
					</div>
				))}
			</div>
		</RoutineWrapper>
	);
};

export default Routine;

import type { ParsedUrlQuery } from "node:querystring";
import Spinner from "@/components/ui/Spinner/Spinner";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import routines from "@/data/routines";
import RoutineWrapper from "./RoutineWrapper.style";
import Slider from "react-slick";
import Timer from "@/components/ui/Timer/Timer";
import Counter from "@/components/ui/Counter/Counter";

interface Params extends ParsedUrlQuery {
	id: string;
}

const Routine: React.FC = () => {
	const { loading, setLoading } = useAppContext();
	const router = useRouter();
	const { id } = router.query as Params;
	const [routine, setRoutine] = useState<Routine | null>(null);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
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
			<h2>{routine?.subtitle || routine?.title}</h2>
			<div className="screen-content">
				<Slider {...settings}>
					{routine?.exercises.map((exercise) => (
						<div className="exercise" key={exercise.id}>
							<h4>{exercise.name}</h4>
							<div className="image-description-container">
								<img src={exercise.img} alt={exercise.name} />
								<div className="description">
									<p>{exercise.description}</p>
								</div>
							</div>
							<div className="details-container">
								<div className="details">
									{exercise.sets && (
										<p>
											<b>Sets </b>
											{exercise.sets}
										</p>
									)}
									{exercise.reps && (
										<p>
											<b>Reps </b>
											{exercise.reps}
										</p>
									)}
									{exercise.duration && (
										<p>
											<b>Duration </b>
											{exercise.duration}s
										</p>
									)}
									{exercise.weight && (
										<p>
											<b>Weight </b>
											{exercise.weight}kg
										</p>
									)}
									{exercise.rest && (
										<p>
											<b>Rest </b>
											{exercise.rest}s
										</p>
									)}
								</div>
								<div className="tools">
									<Timer />
									<Counter />
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</RoutineWrapper>
	);
};

export default Routine;

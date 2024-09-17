import exercises, { noResultExercise } from "@/data/exercises";
import type { Exercise } from "@/types/exercises";

const getExercise = (id: number): Exercise => {
	const exercise = exercises.find((exercise) => exercise.id === id);
	if (!exercise) {
		return noResultExercise;
	}
	return exercise;
};

const exercise = (
	id: number,
	detail: number[],
	duration?: boolean,
): Exercise => {
	const exercise = getExercise(id);
	if (exercise === noResultExercise) {
		throw new Error(`Exercise with id ${id} not found`);
	}
	return {
		...exercise,
		sets: detail[0] > 0 ? detail[0] : undefined,
		duration: duration ? detail[1] : undefined,
		reps: duration ? undefined : detail[1],
		weight: detail[2] > 0 ? detail[2] : undefined,
		rest: detail[3] > 0 ? detail[3] : undefined,
	};
};

const getNextMonday = () => {
	const now = new Date();
	const nextMonday = new Date(
		now.setDate(now.getDate() + ((1 + 7 - now.getDay()) % 7 || 7)),
	);
	nextMonday.setHours(0, 0, 0, 0);
	return nextMonday.getTime();
};

export { getExercise, exercise, getNextMonday };

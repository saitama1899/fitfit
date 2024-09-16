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

export { getExercise, exercise };

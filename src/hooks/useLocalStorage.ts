import { getNextMonday } from "@/utils/routine";

const useLocalStorage = () => {
	const getRoutineStatus = (id: number) => {
		try {
			const item = window.localStorage.getItem(`routine-${id}`);
			if (item) {
				const { value, expiration } = JSON.parse(item);
				if (new Date().getTime() > expiration) {
					window.localStorage.removeItem(`routine-${id}`);
					return false;
				}
				return value;
			}
			return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	const setRoutineStatus = (id: number, value: boolean) => {
		try {
			const expiration = getNextMonday();
			window.localStorage.setItem(
				`routine-${id}`,
				JSON.stringify({ value, expiration }),
			);
		} catch (error) {
			console.log(error);
		}
	};

	const getAllCompletedRoutines = () => {
		const completedRoutines: number[] = [];
		try {
			for (let i = 0; i < window.localStorage.length; i++) {
				const key = window.localStorage.key(i);
				if (key?.startsWith("routine-")) {
					const id = Number(key.replace("routine-", ""));
					if (getRoutineStatus(id)) {
						completedRoutines.push(id);
					}
				}
			}
		} catch (error) {
			console.log(error);
		}
		return completedRoutines;
	};

	const getRoutineCompletionCount = (id: number) => {
		try {
			const count = window.localStorage.getItem(`routine-count-${id}`);
			return count ? Number(count) : 0;
		} catch (error) {
			console.log(error);
			return 0;
		}
	};

	const incrementRoutineCompletionCount = (id: number) => {
		try {
			const currentCount = getRoutineCompletionCount(id);
			window.localStorage.setItem(
				`routine-count-${id}`,
				String(currentCount + 1),
			);
		} catch (error) {
			console.log(error);
		}
	};

	return {
		getRoutineStatus,
		setRoutineStatus,
		getAllCompletedRoutines,
		getRoutineCompletionCount,
		incrementRoutineCompletionCount,
	};
};

export default useLocalStorage;

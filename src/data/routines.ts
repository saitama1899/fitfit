import { exercise } from "@/utils/routine";

const routines: Routine[] = [
	{
		id: 1,
		title: "Día 1",
		subtitle: "Core y Estabilidad",
		category: 1,
		subcategory: 14,
		exercises: [
			exercise(55, [3, 12, 8, 60]), // Dead Bug
			exercise(13, [3, 12, 8, 60]), // Bird-Dog
			exercise(56, [4, 12, 8, 90]), // Glute Bridge KB
			exercise(57, [3, 12, 8, 60]), // Pallof Press
			exercise(60, [3, 30, 0, 60], true), // Plank
		],
	},
	{
		id: 2,
		title: "Día 2",
		subtitle: "Pecho y Tríceps",
		category: 1,
		subcategory: 11,
		exercises: [
			exercise(35, [4, 10, 8, 90]), // Chest Dumbbell Press
			exercise(36, [3, 12, 8, 60]), // Flyes
			exercise(38, [3, 12, 8, 60]), // Overhead Tricep Extension
			exercise(61, [3, 12, 8, 60]), // Bench Dips
			exercise(37, [3, 12, 8, 60]), // Push-Up
			exercise(62, [3, 12, 8, 60]), // Face Pulls
		],
	},
	{
		id: 3,
		title: "Día 3",
		subtitle: "Piernas y Glúteos",
		category: 1,
		subcategory: 8,
		exercises: [
			exercise(63, [4, 12, 8, 90]), // Glute Bridge KB
			exercise(58, [3, 12, 8, 60]), // Step-Up Dumbbell
			exercise(45, [3, 10, 8, 90]), // Romanian Deadlift
			exercise(64, [3, 12, 8, 60]), // Bulgarian Split Squat
			exercise(43, [3, 12, 8, 90]), // Squat
		],
	},
	{
		id: 4,
		title: "Día 4",
		subtitle: "Espalda y Core",
		category: 1,
		subcategory: 10,
		exercises: [
			exercise(65, [4, 10, 8, 90]), // Dumbbell Row
			exercise(40, [3, 12, 8, 60]), // Pullover
			exercise(62, [3, 12, 8, 60]), // Face Pulls
			exercise(13, [3, 12, 8, 60]), // Bird-Dog
			exercise(57, [3, 12, 8, 60]), // Pallof Press
		],
	},
	{
		id: 5,
		title: "Día 5",
		subtitle: "Full Body controlado",
		category: 1,
		subcategory: 14,
		exercises: [
			exercise(43, [3, 12, 8, 90]), // Sumo Deadlift
			exercise(35, [4, 10, 8, 90]), // Chest Dumbbell Press
			exercise(59, [3, 40, 0, 60]), // Farmer Carry
			exercise(56, [3, 12, 8, 90]), // Glute Bridge
			exercise(50, [3, 30, 0, 60], true), // Plank
		],
	},
	// Estiramiento
	{
		id: 6,
		title: "Cadera",
		category: 2,
		subcategory: 17,
		exercises: [
			exercise(1, [2, 30, 0, 0], true),
			exercise(2, [1, 60, 0, 0], true),
			exercise(3, [1, 60, 0, 0], true),
			exercise(4, [1, 60, 0, 0], true),
			exercise(5, [2, 30, 0, 0], true),
			exercise(6, [2, 30, 0, 0], true),
			exercise(7, [2, 30, 0, 0], true),
			exercise(8, [1, 60, 0, 0], true),
			exercise(9, [2, 30, 0, 0], true),
			exercise(10, [2, 30, 0, 0], true),
			exercise(11, [2, 30, 0, 0], true),
			exercise(12, [1, 60, 0, 0], true),
		],
	},
	{
		id: 7,
		title: "Espalda",
		category: 2,
		subcategory: 10,
		exercises: [
			exercise(13, [2, 30, 0, 0], true),
			exercise(14, [1, 60, 0, 0], true),
			exercise(15, [1, 60, 0, 0], true),
			exercise(16, [1, 60, 0, 0], true),
			exercise(17, [2, 30, 0, 0], true),
			exercise(18, [2, 30, 0, 0], true),
			exercise(19, [1, 60, 0, 0], true),
			exercise(20, [1, 60, 0, 0], true),
			exercise(21, [2, 30, 0, 0], true),
			exercise(22, [2, 30, 0, 0], true),
			exercise(23, [2, 30, 0, 0], true),
			exercise(24, [2, 30, 0, 0], true),
			exercise(25, [1, 60, 0, 0], true),
		],
	},
	{
		id: 8,
		title: "Piernas",
		category: 2,
		subcategory: 8,
		exercises: [
			exercise(26, [2, 30, 0, 0], true),
			exercise(27, [2, 30, 0, 0], true),
			exercise(28, [1, 60, 0, 0], true),
			exercise(29, [2, 30, 0, 0], true),
		],
	},
	{
		id: 9,
		title: "Brazos",
		category: 2,
		subcategory: 12,
		exercises: [
			exercise(30, [2, 30, 0, 0], true),
			exercise(31, [2, 30, 0, 0], true),
			exercise(32, [2, 30, 0, 0], true),
			exercise(33, [2, 30, 0, 0], true),
			exercise(34, [1, 60, 0, 0], true),
		],
	},
];

export default routines;

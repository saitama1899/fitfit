import { exercise } from "@/utils/routine";

const routines: Routine[] = [
	{
		id: 1,
		title: "Día 1",
		subtitle: "Pecho y Tríceps",
		category: 11,
		exercises: [
			exercise(35, [4, 10, 8, 90]),
			exercise(37, [3, 12, 8, 60]),
			exercise(36, [4, 11, 8, 90]),
			exercise(38, [3, 11, 8, 60]),
		],
	},
	{
		id: 2,
		title: "Día 2",
		subtitle: "Espalda y Bíceps",
		category: 10,
		exercises: [
			exercise(39, [4, 10, 8, 90]),
			exercise(40, [3, 11, 8, 60]),
			exercise(41, [4, 11, 8, 90]),
			exercise(42, [3, 11, 8, 60]),
		],
	},
	{
		id: 3,
		title: "Día 3",
		subtitle: "Piernas",
		category: 8,
		exercises: [
			exercise(43, [4, 12, 8, 90]),
			exercise(44, [3, 11, 8, 60]),
			exercise(45, [4, 11, 8, 90]),
			exercise(46, [4, 18, 8, 60]),
		],
	},
	{
		id: 4,
		title: "Día 4",
		subtitle: "Hombros y Core",
		category: 13,
		exercises: [
			exercise(47, [4, 11, 8, 90]),
			exercise(48, [3, 13, 8, 60]),
			exercise(49, [3, 11, 8, 60]),
			exercise(50, [3, 45, 0, 60], true),
		],
	},
	{
		id: 5,
		title: "Día 5",
		subtitle: "Cuerpo Completo",
		category: 14,
		exercises: [
			exercise(51, [4, 9, 8, 90]),
			exercise(52, [4, 11, 8, 60]),
			exercise(53, [3, 13, 8, 90]),
			exercise(54, [4, 18, 8, 60]),
		],
	},
];

export default routines;
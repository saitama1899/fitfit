import { exercise } from "@/utils/routine";

const routines: Routine[] = [
	{
		id: 1,
		name: "Día 1: Pecho y Tríceps",
		exercises: [
			exercise(35, [4, 10, 8, 90]),
			exercise(37, [3, 12, 8, 60]),
			exercise(36, [4, 11, 8, 90]),
			exercise(38, [3, 11, 8, 60]),
		],
	},
	{
		id: 2,
		name: "Día 2: Espalda y Bíceps",
		exercises: [
			exercise(39, [4, 10, 8, 90]),
			exercise(40, [3, 11, 8, 60]),
			exercise(41, [4, 11, 8, 90]),
			exercise(42, [3, 11, 8, 60]),
		],
	},
	{
		id: 3,
		name: "Día 3: Piernas",
		exercises: [
			exercise(43, [4, 12, 8, 90]),
			exercise(44, [3, 11, 8, 60]),
			exercise(45, [4, 11, 8, 90]),
			exercise(46, [4, 18, 8, 60]),
		],
	},
	{
		id: 4,
		name: "Día 4: Hombros y Core",
		exercises: [
			exercise(47, [4, 11, 8, 90]),
			exercise(48, [3, 13, 8, 60]),
			exercise(49, [3, 11, 8, 60]),
			exercise(50, [3, 45, 8, 60], true),
		],
	},
	{
		id: 5,
		name: "Día 5: Cuerpo completo",
		exercises: [
			exercise(51, [4, 9, 8, 90]),
			exercise(52, [4, 11, 8, 60]),
			exercise(53, [3, 13, 8, 90]),
			exercise(54, [4, 18, 8, 60]),
		],
	},
];

export default routines;

interface Exercise {
	id: number;
	name: string;
	img: string;
	category: number;
	subCategory: number;
	description: string;
	sets?: number;
	reps?: number;
	weight?: number;
	rest?: number;
  duration?: number;
}
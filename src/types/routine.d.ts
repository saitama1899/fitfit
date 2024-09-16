interface Routine {
	id: number;
	title: string;
	subtitle?: string;
	subcategory: number;
	category: number;
	exercises: Exercise[];
}

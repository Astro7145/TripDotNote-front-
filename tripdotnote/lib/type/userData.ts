export type ChartData = {
	id: string | number;
	color: string;
	data: Array<{
		x: number | string | Date;
		y: number | string | Date;
	}>;
};

export type PostListData = {
	id: string;
	title: string;
};

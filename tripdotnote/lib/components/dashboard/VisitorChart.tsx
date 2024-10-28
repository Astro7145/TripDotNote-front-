"use client";

import { Paper } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

export default function VisitorChart() {
	const MyResponsiveLine = () => (
		<ResponsiveLine
			data={chartData}
			margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
			xScale={{ type: "point" }}
			yScale={{
				type: "linear",
				min: "auto",
				max: "auto",
				stacked: true,
				reverse: false,
			}}
			yFormat=" >-.2f"
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 0,
				tickPadding: 5,
				tickRotation: 0,
				legend: "",
				legendOffset: 36,
				legendPosition: "middle",
				truncateTickAt: 0,
			}}
			axisLeft={null}
			enableGridX={false}
			colors={{ scheme: "nivo" }}
			lineWidth={3}
			pointSize={10}
			pointColor={{ theme: "background" }}
			pointBorderWidth={3}
			pointBorderColor={{ from: "serieColor", modifiers: [] }}
			pointLabel="data.yFormatted"
			pointLabelYOffset={-12}
			enableCrosshair={false}
			enableTouchCrosshair={true}
			useMesh={true}
			legends={[]}
		/>
	);

	return (
		<Paper square elevation={0} variant="outlined" sx={{ height: 300 }}>
			<MyResponsiveLine />
		</Paper>
	);
}

const chartData = [
	{
		id: "japan",
		color: "hsl(216, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 5,
			},
			{
				x: "helicopter",
				y: 4,
			},
			{
				x: "boat",
				y: 7,
			},
			{
				x: "train",
				y: 1,
			},
			{
				x: "subway",
				y: 2,
			},
		],
	},
	{
		id: "france",
		color: "hsl(216, 0%, 40%)",
		data: [
			{
				x: "plane",
				y: 10,
			},
			{
				x: "helicopter",
				y: 4,
			},
			{
				x: "boat",
				y: 2,
			},
			{
				x: "train",
				y: 6,
			},
			{
				x: "subway",
				y: 7,
			},
		],
	},
];

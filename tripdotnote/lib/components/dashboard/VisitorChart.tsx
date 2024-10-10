import { Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const xAxisData: Array<{ month: number; day: number; value: number }> = [];
for (let i = 30; i >= 0; i--) {
	xAxisData.push({
		month: i - 15 > 0 ? 9 : 10,
		day: i - 15 > 0 ? i - 15 : i - 15 * -1,
		value: Math.random(),
	});
}

export default function VisitorChart() {
	return (
		<Paper square={true} elevation={0} variant="outlined">
			<BarChart
				dataset={xAxisData}
				xAxis={[{ scaleType: "band", dataKey: "month" }]}
				series={[{ dataKey: "value", stack: "value" }]} // 데이터 채우기
				width={600}
				height={400}
			/>
		</Paper>
	);
}

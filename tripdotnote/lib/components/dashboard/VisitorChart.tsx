import { Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const xAxisData: Array<{ month: number; day: number }> = [];
for (let i = 30; i >= 0; i--) {
	xAxisData.push({
		month: i - 15 > 0 ? 9 : 10,
		day: i - 15 > 0 ? i - 15 : i - 15 * -1,
	});
}

export default function VisitorChart() {
	return (
		<Paper square={true} elevation={0} variant="outlined">
			<BarChart
				xAxis={[{ scaleType: "band", dataKey: "month" }]}
				series={[]} // 데이터 채우기
			></BarChart>
		</Paper>
	);
}

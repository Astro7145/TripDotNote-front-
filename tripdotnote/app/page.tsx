import Summary from "@/lib/components/dashboard/Summary";
import VisitorChart from "@/lib/components/dashboard/VisitorChart";
import { Grid2 } from "@mui/material";

export default function Home() {
	return (
		<Grid2
			container
			size={12}
			columns={{ xs: 12, sm: 12, md: 10, lg: 8, xl: 8 }}
			spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
			direction="column"
			sx={{ backgroundColor: "#0000FF" }}
		>
			<Grid2 size="grow">
				<Summary />
			</Grid2>
			<Grid2 size="grow">
				<VisitorChart />
			</Grid2>
		</Grid2>
	);
}

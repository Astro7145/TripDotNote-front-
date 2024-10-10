import { Grid2, Paper, Typography } from "@mui/material";

const statisticsRawData: Array<[string, number]> = [
	["오늘 조회수", 8],
	["어제 조회수", 11],
	["누적 조회수", 8821],
	["오늘 방문자", 6],
	["어제 방문자", 5],
	["누적 방문자", 4913],
	["구독자", 1],
];

export default function Summary() {
	return (
		<Paper square={true} elevation={0} variant="outlined">
			<Grid2
				container
				columns={{ xs: 8, sm: 8, md: 10, lg: 12, xl: 12 }}
				columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 4, xl: 4 }}
				px={4}
				py={3}
			>
				{statisticsRawData.map((data, idx) => (
					<Grid2
						key={`DATA${idx}`}
						container
						direction="column"
						rowSpacing={0.5}
					>
						<Grid2>
							<Typography
								variant="caption"
								color="textDisabled"
								fontSize={13}
							>
								{data[0]}
							</Typography>
						</Grid2>
						<Grid2>
							<Typography variant="body1" fontSize={20}>
								{data[1]}
							</Typography>
						</Grid2>
					</Grid2>
				))}
				<Grid2></Grid2>
			</Grid2>
		</Paper>
	);
}

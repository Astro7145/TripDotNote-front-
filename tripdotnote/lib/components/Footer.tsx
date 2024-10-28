import { Grid2, Paper, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
	return (
		<Paper
			square={true}
			elevation={0}
			variant="outlined"
			sx={{
				borderTop: "none",
				borderRight: "none",
				borderLeft: "none",
			}}
		>
			<Grid2 container columns={3}>
				<Grid2 container rowSpacing={10}>
					<Grid2>
						<Typography gutterBottom>
							트립닷컴은 카카오에서 마음을 담아 만듭니다.
						</Typography>
					</Grid2>
				</Grid2>
				<Grid2 size="grow"></Grid2>
				<Grid2 container></Grid2>
			</Grid2>
		</Paper>
	);
}

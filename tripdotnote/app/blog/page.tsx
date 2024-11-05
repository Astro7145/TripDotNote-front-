import { Grid2, Typography } from '@mui/material'

export default function Page() {
	return (
		<Grid2 container columns={1}>
			<Grid2 size={1} textAlign="center" mt={8}>
				<Typography variant="h4">전체 글</Typography>
			</Grid2>
			<Grid2 container size={1} columns={2} columnSpacing={2} rowSpacing={3} mt={8}>
				<Grid2 size={1}>asdf</Grid2>
				<Grid2 size={1}>asdf</Grid2>
				<Grid2 size={1}>asdf</Grid2>
				<Grid2 size={1}>asdf</Grid2>
			</Grid2>
		</Grid2>
	);
}

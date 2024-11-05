import SearchInputWithToggle from "@/lib/components/SearchInputWithToggle";
import { Avatar, Box, Divider, Grid2, Paper, Toolbar } from "@mui/material";
import { green } from "@mui/material/colors";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
    return (
		<Grid2 container columns={1}>
			<Grid2 size={1}>
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
					<Grid2 container columns={5} p={10}>
						<Grid2 size={1}></Grid2>
						<Grid2 size={3} justifyItems='center'>
							<Avatar sx={{ bgcolor: green[500] }}>
								A
							</Avatar>
						</Grid2>
						<Grid2 size={1}>
							<SearchInputWithToggle size={300} />
						</Grid2>
					</Grid2>
				</Paper>
			</Grid2>
			<Grid2 size={1}>{children}</Grid2>
		</Grid2>
	);
}

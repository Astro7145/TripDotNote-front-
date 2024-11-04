import SearchInputWithToggle from "@/lib/components/SearchInputWithToggle";
import { Grid2 } from "@mui/material";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
    return (
		<Grid2 container columns={5} direction="column">
			<Grid2 container size={3} columns={3} justifyContent="center">
				<Grid2 size={1}></Grid2>
				<Grid2 size={1}></Grid2>
				<Grid2 size={1}>
					<SearchInputWithToggle />
				</Grid2>
			</Grid2>
			<Grid2>{children}</Grid2>
		</Grid2>
	);
}

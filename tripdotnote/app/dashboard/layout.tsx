import { Grid2, Toolbar } from "@mui/material";
import TopBar from "@/lib/components/TopBar";
import Footer from "@/lib/components/Footer";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Grid2 container direction="column" rowSpacing={6}>
				<TopBar />
				<Toolbar />
			<Grid2 container spacing={2} direction="row">
				<Grid2 size="grow"></Grid2>
				<Grid2
					container
					size={{ xs: 12, sm: 12, md: 10, lg: 8, xl: 8 }}
				>
					{children}
				</Grid2>
				<Grid2 size="grow"></Grid2>
			</Grid2>
			<Footer />
		</Grid2>
	);
}

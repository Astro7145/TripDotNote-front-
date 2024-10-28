import { Grid2 } from "@mui/material";
import TopBar from "@/lib/components/TopBar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider>
					<Grid2 container spacing={2}>
						<Grid2
							size="grow"
							// sx={{ backgroundColor: "#FF0000" }}
						></Grid2>
						<Grid2
							container
							size={{ xs: 12, sm: 12, md: 10, lg: 8, xl: 8 }}
						>
							<TopBar />
							{children}
						</Grid2>
						<Grid2
							size="grow"
							// sx={{ backgroundColor: "#FF0000" }}
						></Grid2>
					</Grid2>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}

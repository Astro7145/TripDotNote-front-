"use client";

import {
	AppBar,
	Avatar,
	Box,
	Container,
	Grid2,
	IconButton,
	Menu,
	MenuItem,
	Paper,
	Tab,
	Tabs,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const menus = ["홈", "피드", "내 블로그", "설정"];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function samePageLinkNavigation(
	event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
	if (
		event.defaultPrevented ||
		event.button !== 0 || // ignore everything but left-click
		event.metaKey ||
		event.ctrlKey ||
		event.altKey ||
		event.shiftKey
	) {
		return false;
	}
	return true;
}

function LinkTab(props: { label?: string; href?: string; selected?: boolean }) {
	return (
		<Tab
			component="a"
			onClick={(
				event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
			) => {
				// Routing libraries handle this, you can remove the onClick handle when using them.
				if (samePageLinkNavigation(event)) {
					event.preventDefault();
				}
			}}
			aria-current={props.selected && "page"}
			{...props}
		/>
	);
}

export default function TopBar() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const [value, setValue] = React.useState(0);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		if (anchorElNav) {
			setAnchorElNav(null);
		} else {
			setAnchorElNav(event.currentTarget);
		}
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		// event.type can be equal to focus with selectionFollowsFocus.
		if (
			event.type !== "click" ||
			(event.type === "click" &&
				samePageLinkNavigation(
					event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
				))
		) {
			setValue(newValue);
		}
	};

	return (
		<AppBar component="nav" sx={{ background: "white", boxShadow: "none" }}>
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
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<AdbIcon
							sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
						/>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href="#app-bar-with-responsive-menu"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							Trip.note
						</Typography>

						<Grid2
							sx={{
								flexGrow: 1,
								display: { xs: "flex", md: "none" },
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Tabs
								value={value}
								onChange={handleChange}
								id="menu-appbar"
								aria-label="nav tabs example"
								role="navigation"
								textColor="inherit"
								sx={{
									display: Boolean(anchorElNav)
										? "flex"
										: "none",
								}}
							>
								{menus.map((menu, idx) => (
									<LinkTab
										key={`menu${idx}`}
										label={`${menu}`}
										href="/"
									/>
								))}
							</Tabs>
						</Grid2>
						<Tabs
							value={value}
							onChange={handleChange}
							id="menu-appbar"
							aria-label="nav tabs example"
							role="navigation"
							textColor="inherit"
							sx={{
								display: { xs: "none", md: "flex" },
								flexGrow: 1,
							}}
						>
							{menus.map((menu, idx) => (
								<LinkTab
									key={`menu${idx}`}
									label={`${menu}`}
									href="/"
								/>
							))}
						</Tabs>
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton
									onClick={handleOpenUserMenu}
									sx={{ p: 0 }}
								>
									<Avatar
										alt="Remy Sharp"
										src="/static/images/avatar/2.jpg"
									/>
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: "45px" }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem
										key={setting}
										onClick={handleCloseUserMenu}
									>
										<Typography
											sx={{ textAlign: "center" }}
										>
											{setting}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</Paper>
		</AppBar>
	);
}

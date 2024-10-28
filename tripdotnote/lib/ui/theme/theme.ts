"use client";
import { createTheme } from "@mui/material/styles";
import { notoSansKr } from "../fonts/NotoSansKr";

const theme = createTheme({
	typography: {
		fontFamily: notoSansKr.style.fontFamily,
	},
	palette: {
		background: {
			default: "#f3f5f7",
		},
	},
});

export default theme;

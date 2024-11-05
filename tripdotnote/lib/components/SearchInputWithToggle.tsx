import { InputBase, Paper } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInputWithToggle(props:{size: number}) {
    
    return (
		<Paper
			variant="outlined"
			elevation={0}
			sx={{ display: "flex", alignItems: "center", padding: 1, overflow: 'hidden', width: props.size}}
		>
			<InputBase
				sx={{ ml: 1, flex: 1}}
				placeholder="Search in this blog"
			/>
			{/* <Divider orientation="vertical" variant="fullWidth" flexItem /> */}
			<SearchIcon
				color="inherit"
				fontSize="large"
				sx={{ paddingLeft: 1 }}
			/>
		</Paper>
	);
}

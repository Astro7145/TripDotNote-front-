import { InputBase, Paper } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from 'react'

export default function SearchInputWithToggle() {
    // const [open, setOpen] = useState(false);
    
    return (
		<Paper variant='outlined' elevation={0} sx={{display: 'flex', alignItems: 'center'}}>
			<InputBase
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search in this blog"
			/>
			<SearchIcon color="primary" fontSize="large" />
		</Paper>
	);
}

import { Grid2, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export default function RecentPosts() {
    return (
		<Grid2 container columns={4} columnSpacing={2}>
			{posts.map((elem, idx) => (
				<Grid2 key={`POST_${idx}`} size={1}>
					<Paper elevation={0} variant="outlined">
						<Grid2 sx={{ position: "relative", height: 200 }}>
							<Image
								src={elem.imageSrc}
								fill
								alt="thumbnail"
								style={{ objectFit: "cover" }}
							/>
						</Grid2>
						<Grid2 container direction="column" spacing={5} p={2}>
							<Grid2>
								<Typography variant="body2" fontSize={14}>
									{elem.title}
								</Typography>
							</Grid2>
							<Grid2>
								<Typography
									variant="caption"
									fontSize={12}
									color="textDisabled"
								>
									댓글 {elem.comments} / 공감 {elem.likes}
								</Typography>
							</Grid2>
						</Grid2>
					</Paper>
				</Grid2>
			))}
		</Grid2>
	);
}

const posts = [
	{
		title: "this cat is so cute!",
		imageSrc: "https://i.imgur.com/FOLnUbl.jpeg",
		comments: 2,
		likes: 1,
	},
	{
		title: "The most beautiful place in the world.",
		imageSrc: "https://i.imgur.com/eCcrLSa.png",
		comments: 4,
		likes: 7,
	},
	{
		title: "How to be a good developer.",
		imageSrc: "https://i.imgur.com/EmOianw.png",
		comments: 1,
		likes: 3,
	},
	{
		title: "My favourite song!!",
		imageSrc: "https://i.imgur.com/Wwt3tQL.png",
		comments: 2,
		likes: 4,
	},
];
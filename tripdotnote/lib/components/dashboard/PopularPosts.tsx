import { PostListData } from "@/lib/type/userData";
import { Grid2, Paper, Typography } from "@mui/material";
import React from "react";

export default function PopularPosts() {
	return (
		<Paper square={true} elevation={0} variant="outlined">
			<Grid2
				container
				direction="column"
				columns={{ xs: 8, sm: 8, md: 10, lg: 12, xl: 12 }}
				columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
				px={4}
				py={3}
			>
				<Grid2>
					<Typography variant="overline">인기글</Typography>
				</Grid2>
				<Grid2 container direction="column">
					{tempData.map((elem, idx) => (
						<Grid2
							container
							key={elem.id}
							direction="row"
							alignItems="center"
						>
							<Grid2>
								<Typography
									color="primary"
									fontSize={15}
									fontWeight={700}
									gutterBottom
								>
									{idx + 1}
								</Typography>
							</Grid2>
							<Grid2 size="grow">
								<Typography gutterBottom>
									{elem.title}
								</Typography>
							</Grid2>
						</Grid2>
					))}
				</Grid2>
			</Grid2>
		</Paper>
	);
}

const tempData: Array<PostListData> = [
	{ id: "POST1", title: "REST API의 의미" },
	{ id: "POST2", title: "Ajax란 무엇이고 어떤 것을 담당하고 있나요?" },
	{ id: "POST3", title: "변수란 무엇인가요?" },
	{ id: "POST4", title: "HTTP 요청 메서드에 대해서 설명해주세요" },
	{ id: "POST5", title: "HTTP 상태 코드 5가지를 설명해주세요" },
	{ id: "POST6", title: "명시적 타입 변환 / 암묵적 타입 변환이란?" },
	{ id: "POST7", title: "truthy한 값과 falsy한 값이란?" },
	{ id: "POST8", title: "스프레드 연산자란?" },
	{ id: "POST9", title: "구조 분해 할당이란?" },
	{ id: "POST10", title: "SPA의 의미와 장단점" },
	// { id: "POST11", title: "REST API의 의미" },
	// { id: "POST12", title: "Ajax란 무엇이고 어떤 것을 담당하고 있나요?" },
	// { id: "POST13", title: "변수란 무엇인가요?" },
	// { id: "POST14", title: "HTTP 요청 메서드에 대해서 설명해주세요" },
	// { id: "POST15", title: "HTTP 상태 코드 5가지를 설명해주세요" },
	// { id: "POST16", title: "명시적 타입 변환 / 암묵적 타입 변환이란?" },
	// { id: "POST17", title: "truthy한 값과 falsy한 값이란?" },
	// { id: "POST18", title: "스프레드 연산자란?" },
	// { id: "POST19", title: "구조 분해 할당이란?" },
	// { id: "POST20", title: "SPA의 의미와 장단점" },
];

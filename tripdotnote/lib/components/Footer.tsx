import { Grid2, Paper, Typography } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import React from "react";

export default function Footer() {
	return (
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
			<Grid2 container justifyContent="space-between">
				<Grid2 container direction="column" m={5} columns={1}>
					<Grid2 container direction="row">
						<Grid2>
							<VolunteerActivismIcon fontSize="large" />
						</Grid2>
						<Grid2
							container
							direction="column"
							justifyContent="center"
							ml={2}
						>
							<Grid2>
								<Typography
									variant="body2"
									fontSize={12}
									gutterBottom
								>
									트립닷컴은 카카오에서 마음을 담아 만듭니다.
								</Typography>
							</Grid2>
							<Grid2>
								<Typography variant="body2" fontSize={10}>
									© Kakao Corp.
								</Typography>
							</Grid2>
						</Grid2>
					</Grid2>
					<Grid2
						container
						direction="column"
						color="grey"
						fontSize={10}
						mt={2}
					>
						<Grid2>
							<Typography variant="caption" gutterBottom mr={1}>
								대표이사 정신아
							</Typography>
							<Typography variant="caption" gutterBottom mr={1}>
								|
							</Typography>
							<Typography variant="caption" gutterBottom>
								사업자 등록 번호 120-81-47521
							</Typography>
						</Grid2>
						<Grid2>
							<Typography variant="caption" gutterBottom>
								통신판매업신고번호 제2015-제주아라-0032호
							</Typography>
						</Grid2>
						<Grid2>
							<Typography variant="caption" gutterBottom mr={1}>
								주소 제주특별자치도 제주시 첨단로 242(영평동)
							</Typography>
							<Typography variant="caption" gutterBottom mr={1}>
								|
							</Typography>
							<Typography variant="caption" gutterBottom>
								호스팅사업자 (주)카카오
							</Typography>
						</Grid2>
						<Grid2>
							<Typography variant="caption" gutterBottom mr={1}>
								고객센터 1577-3754
							</Typography>
							<Typography variant="caption" gutterBottom mr={1}>
								|
							</Typography>
							<Typography variant="caption" gutterBottom>
								이메일 help.notice@kakaocorp.com
							</Typography>
						</Grid2>
					</Grid2>
				</Grid2>
				<Grid2 container m={5} columnSpacing={10}>
					<Grid2>
						<Typography fontWeight="bold" fontSize={14} mb={2}>
							메뉴가 궁금할 땐
						</Typography>
						<ul style={{ listStyle: "none", padding: 0 }}>
							{menu1.map((elem, idx) => (
								<li key={`MENU1_${idx}`}>
									<Typography fontSize={12} mt={1}>
										{elem}
									</Typography>
								</li>
							))}
						</ul>
					</Grid2>
					<Grid2>
						<Typography fontWeight="bold" fontSize={14} mb={2}>
							사용하다 궁금할 땐
						</Typography>
						<ul style={{ listStyle: "none", padding: 0 }}>
							{menu2.map((elem, idx) => (
								<li key={`MENU2_${idx}`}>
									<Typography fontSize={12} mt={1}>
										{elem}
									</Typography>
								</li>
							))}
						</ul>
					</Grid2>
					<Grid2>
						<Typography fontWeight="bold" fontSize={14} mb={2}>
							정책이 궁금할 땐
						</Typography>
						<ul style={{ listStyle: "none", padding: 0 }}>
							{menu3.map((elem, idx) => (
								<li key={`MENU3_${idx}`}>
									<Typography fontSize={12} mt={1}>
										{elem}
									</Typography>
								</li>
							))}
						</ul>
					</Grid2>
					<Grid2>
						<Typography fontWeight="bold" fontSize={14} mb={2}>
							도움이 필요할 땐
						</Typography>
						<ul style={{ listStyle: "none", padding: 0 }}>
							{menu4.map((elem, idx) => (
								<li key={`MENU4_${idx}`}>
									<Typography fontSize={12} mt={1}>
										{elem}
									</Typography>
								</li>
							))}
						</ul>
					</Grid2>
				</Grid2>
			</Grid2>
		</Paper>
	);
}

const menu1 = ["홈", "피드", "스킨", "포럼"];
const menu2 = ["스킨가이드", "고객센터", "공지사항"];
const menu3 = ["이용약관", "이전 이용약관", "운영정책", "개인정보처리방침", "청소년보호정책", "Email 수집거부정책"];
const menu4 = ["권리침해신고", "상거래 피해 구제신청"];
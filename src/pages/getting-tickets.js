import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Em, Text, Box, Button, Section, Image, Span, Hr, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdDateRange, MdLocationOn, MdAssignment, MdCardMembership, MdHearing, MdToll, MdDone } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"getting-tickets"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
			<meta name={"robots"} content={"noindex,nofollow"} />
		</Helmet>
		<Section
			padding="100px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0, 0, 0, 0.6) 0%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/landscape-city-cityscape-night-reflection-skyline-skyscraper-evening-horizon-dock-dusk-metropolis-downtown-dawn-1920x1080-px-urban-area-computer-wallpaper-metropolitan-area-human-settlement-557555.jpg?v=2021-04-28T07:59:09.434Z) 50%/cover no-repeat scroll padding-box"
			height="auto"
			border-width="0 0 1px 0"
		>
			<Override slot="SectionContent" align-items="center" md-align-items="flex-start" />
			<Box
				width="50%"
				display="flex"
				align-items="center"
				justify-content="center"
				sm-width="100%"
			>
				<Box
					width="100%"
					display="flex"
					align-items="center"
					justify-content="center"
					sm-width="100%"
					sm-height="auto"
					height="auto"
					sm-margin="0px 28px 0px 11px"
				>
					<Icon category="md" icon={MdDateRange} color="#fe4614" width="40px" />
					<Text color="#ffffff" font="normal 400 20px sans-serif" sm-width="100%">
						August 3rd to 5th
						<Em />
					</Text>
				</Box>
				<Box
					width="100%"
					display="flex"
					align-items="center"
					justify-content="center"
					height="auto"
				>
					<Icon category="md" icon={MdLocationOn} color="#fe4614" width="40px" />
					<Text color="#ffffff" font="normal 400 20px sans-serif">
						Orlando, Florida.
					</Text>
				</Box>
			</Box>
			<Text
				font="600 100px --fontFamily-googlePoppins"
				color="#ffffff"
				as="span"
				md-font="600 60px --fontFamily-googlePoppins"
				sm-font="600 30PX --fontFamily-googlePoppins"
			>
				GETTING TICKETS
			</Text>
			<Text color="#ffffff" font="normal 400 20px sans-serif">
				Largest digital event of the year.
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				/>
			</Text>
			<Box
				width="50%"
				display="flex"
				align-items="center"
				justify-content="center"
				margin="20px 0px 0px 0px"
				md-flex-direction="column"
				md-justify-content="flex-start"
				md-align-items="flex-start"
			>
				<Button
					padding="8px 24px 8px 24px"
					background="#fe4614"
					border-radius="50px"
					font="normal 500 16px/1.5 --fontFamily-googlePoppins"
					margin="0px 12px 0px 12px"
				>
					GET TICKET
				</Button>
				<Button
					padding="8px 24px 8px 24px"
					background="rgba(254, 70, 20, 0)"
					border-radius="50px"
					font="normal 500 16px/1.5 --fontFamily-googlePoppins"
					border-color="#ffffff"
					border-style="solid"
					border-width="1px"
					margin="0px 12px 0px 12px"
					md-margin="10px 12px 0px 12px"
				>
					VIEW TOUR
				</Button>
			</Box>
			<Components.QuarklycommunityKitTimer
				showDays={false}
				color="--light"
				sm-width="100%"
				sm-height="auto"
				sm-font="18px sans-serif"
			>
				<Override slot="Item" md-margin="0px 56px 0px 0px" />
			</Components.QuarklycommunityKitTimer>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" height="auto" background="#f4f4f4">
			<Override slot="SectionContent" align-items="center" />
			<Box
				display="flex"
				min-width="100%"
				lg-flex-direction="column"
				lg-align-items="center"
				lg-justify-content="center"
			>
				<Image width="100%" height="auto" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/2345.png?v=2021-04-28T12:01:23.234Z" min-width="50%" />
				<Box
					min-width="50%"
					lg-display="flex"
					lg-flex-direction="column"
					lg-align-items="center"
					lg-justify-content="center"
				>
					<Text color="#000000" font="normal 400 40px --fontFamily-googlePoppins">
						What is Eventbiz?
					</Text>
					<Text color="#686868" font="normal 400 18px --fontFamily-googlePoppins">
						Eventbiz is largest digital event of this year. We use large audiotorium with capacity of fifty thousand participants is also equipped with advanced facilities.
					</Text>
					<Components.TabsList lg-display="flex" lg-flex-direction="column" lg-align-items="center" defaultTab="1">
						<Override
							slot="Tab"
							margin="0px 10px 0px 0px"
							background="rgba(0, 119, 204, 0)"
							color="#686868"
							active-border-width="0 0 1px 0"
							active-border-style="solid"
							padding="8px 0px 8px 0px"
							font="normal 600 18px/1.5 --fontFamily-googlePoppins"
							focus-border-style="solid"
							border-style="solid"
							border-width="0 0 4px 0"
							focus-box-shadow="0 0 0 2px rgba(0, 119, 204, 0)"
							active-border-color="#fe4614"
							hover-border-color="#fe4614"
							disabled-border-color="#fe4614"
						/>
						<Override slot="Tab 60894fec3691b060d29b5ad0" hover-border-color="#fe4614">
							Topics
						</Override>
						<Override slot="Tab :active" border-width="0 0 4px 0" border-style="solid" />
						<Override slot="Tab 608967fa6f7a30e7af6e1310">
							Workshops
						</Override>
						<Override slot="Tab 608968194b34f06cb84f2f30">
							Information
						</Override>
						<Components.TabsItem tabId="1">
							<Box display="flex" margin="15px 0px 0px 0px" flex-direction="column" sm-flex-direction="column">
								<Box display="flex" min-width="18%" height="100px">
									<Image width="100px" height="100px" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/1.jpg?v=2021-04-28T12:36:12.867Z" border-radius="50px" />
								</Box>
								<Box min-width="80%">
									<Text color="#686868" font="normal 300 18px/1.2 --fontFamily-googlePoppins">
										Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
									</Text>
								</Box>
							</Box>
						</Components.TabsItem>
						<Components.TabsItem tabId="2">
							<Box display="flex" min-width="18%" height="100px">
								<Image
									width="100px"
									height="100px"
									src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/2.jpg?v=2021-04-28T13:43:42.967Z"
									border-radius="50px"
									sm-border-radius="50px"
								/>
							</Box>
							<Box display="flex" flex-direction="column">
								<Box min-width="80%">
									<Text color="#686868" font="normal 300 18px/1.2 --fontFamily-googlePoppins">
										Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
									</Text>
								</Box>
							</Box>
						</Components.TabsItem>
						<Components.TabsItem tabId="3">
							<Box display="flex" margin="15px 0px 0px 0px" flex-direction="column">
								<Box display="flex" min-width="18%" height="100px">
									<Image width="100px" height="100px" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/3.jpg?v=2021-04-28T13:53:23.378Z" border-radius="50px" />
								</Box>
								<Box min-width="80%">
									<Text color="#686868" font="normal 300 18px/1.2 --fontFamily-googlePoppins" margin="0px 0px 16px 0px">
										Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
									</Text>
								</Box>
							</Box>
						</Components.TabsItem>
					</Components.TabsList>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" box-sizing="border-box" />
			<Text color="#373737" font="normal 400 40px/100% sans-serif" text-align="center">
				<Span color="#fe4614">
					Event
				</Span>
				{" "}Speakers
			</Text>
			<Text color="#373737" font="normal 400 20px sans-serif" text-align="center" margin="0px 0px 16px 0px">
				We invites digital experts arround the world
			</Text>
			<Box
				width="100%"
				display="flex"
				margin="40px 0px 0px 0px"
				sm-flex-direction="column"
				box-sizing="border-box"
				sm-align-items="center"
			>
				<Box
					width="33%"
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					sm-width="100%"
					margin="12px 12px 12px 12px"
					sm-margin="12px 0px 12px 0px"
					box-sizing="border-box"
				>
					<Image
						width="100%"
						height="auto"
						src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/1.jpg?v=2021-04-29T08:21:00.112Z"
						display="flex"
						loading="lazy"
					/>
					<Text font="16px --fontFamily-googlePoppins">
						Ben Sheridan
					</Text>
					<Text color="#fe4614" font="14px --fontFamily-googlePoppins" margin="-15px 0px 16px 0px">
						found & Seo
					</Text>
				</Box>
				<Box
					width="33%"
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					sm-width="100%"
					margin="12px 12px 12px 12px"
				>
					<Image
						width="100%"
						height="auto"
						src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/4.jpg?v=2021-04-29T08:21:00.058Z"
						display="flex"
						loading="lazy"
					/>
					<Text font="16px --fontFamily-googlePoppins">
						Sophie Lana
					</Text>
					<Text color="#fe4614" font="14px --fontFamily-googlePoppins" margin="-15px 0px 16px 0px">
						found & Seo
					</Text>
				</Box>
				<Box
					width="33%"
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					sm-width="100%"
					margin="12px 12px 12px 12px"
					position="relative"
				>
					<Image width="100%" height="auto" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/3.jpg?v=2021-04-29T08:21:00.634Z" display="flex" />
					<Text font="16px --fontFamily-googlePoppins">
						James Hoult
					</Text>
					<Text color="#fe4614" font="14px --fontFamily-googlePoppins" margin="-15px 0px 16px 0px">
						found & Seo
					</Text>
				</Box>
			</Box>
			<Box
				width="100%"
				display="flex"
				margin="40px 0px 0px 0px"
				height="400px"
				sm-flex-direction="column"
				sm-align-items="center"
				sm-justify-content="center"
				sm-height="auto"
			>
				<Box
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					sm-width="100%"
					margin="22px 22px 22px 22px"
				>
					<Image
						height="auto"
						src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/6.jpg?v=2021-04-29T08:21:00.050Z"
						display="flex"
						sm-height="auto"
						sm-width="100%"
						width="100%"
					/>
					<Text font="16px --fontFamily-googlePoppins">
						Oscar Helman
					</Text>
					<Text font="14px --fontFamily-googlePoppins" color="#fe4614" margin="-15px 0px 16px 0px">
						found & Seo
					</Text>
				</Box>
				<Box
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					sm-width="100%"
					sm-height="auto"
					margin="22px 22px 22px 22px"
				>
					<Image
						height="auto"
						src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/7.jpg?v=2021-04-29T08:21:00.050Z"
						display="flex"
						sm-width="100%"
						sm-height="auto"
						width="100%"
					/>
					<Text font="16px --fontFamily-googlePoppins">
						Rose Shipp
					</Text>
					<Text font="14px --fontFamily-googlePoppins" color="#fe4614" margin="-15px 0px 16px 0px">
						found & Seo
					</Text>
				</Box>
				<Box
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					sm-width="100% "
					sm-height="auto"
					margin="22px 22px 22px 22px"
				>
					<Image
						height="auto"
						src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/5.jpg?v=2021-04-29T08:21:00.049Z"
						display="flex"
						sm-height="auto"
						sm-width="100% "
						width="100%"
					/>
					<Text font="16px --fontFamily-googlePoppins">
						Isaac Nicholas
					</Text>
					<Text font="14px --fontFamily-googlePoppins" color="#fe4614" margin="-15px 0px 16px 0px">
						found & Seo
					</Text>
				</Box>
				<Box
					display="flex"
					align-items="center"
					justify-content="center"
					flex-direction="column"
					sm-width="100% "
					sm-height="auto"
					margin="22px 22px 22px 22px"
				>
					<Image
						height="auto"
						src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/2.jpg?v=2021-04-29T08:21:00.045Z"
						display="flex"
						sm-width="100% "
						sm-height="auto"
						width="100%"
					/>
					<Text font="16px --fontFamily-googlePoppins">
						John Arnold
					</Text>
					<Text font="14px --fontFamily-googlePoppins" color="#fe4614" margin="-15px 0px 16px 0px">
						found & Seo
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" background="linear-gradient(0deg,rgba(0, 0, 0, 0.8) 0%,rgba(0, 0, 0, 0.8) 100%),rgba(0, 0, 0, 0) url(https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/work.jpg?v=2021-04-29T12:09:52.455Z) 50%/cover no-repeat fixed padding-box">
			<Override slot="SectionContent" align-items="center" box-sizing="border-box" />
			<Box
				display="flex"
				width="100%"
				color="#ffffff"
				font="16px --fontFamily-googlePoppins"
				sm-flex-direction="column"
				sm-align-items="center"
				sm-justify-content="center"
			>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
					width="25%"
				>
					<Icon
						category="md"
						icon={MdAssignment}
						color="#fe4614"
						size="40px"
						margin="0px 0px -15px 0px"
					/>
					<Text font="30px Poppins, sans-serif">
						8800
					</Text>
					<Text font="200 16px Poppins, sans-serif" margin="-10px 0px 16px 0px">
						PARTICIPANTS
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
					width="25%"
				>
					<Icon
						category="md"
						icon={MdCardMembership}
						color="#fe4614"
						size="40px"
						margin="0px 0px -15px 0px"
					/>
					<Text font="30px Poppins, sans-serif">
						300
					</Text>
					<Text font="200 16px Poppins, sans-serif" margin="-10px 0px 16px 0px">
						TOPICS
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
					width="25%"
				>
					<Icon
						category="md"
						icon={MdHearing}
						color="#fe4614"
						size="40px"
						margin="0px 0px -15px 0px"
					/>
					<Text font="30px Poppins, sans-serif">
						50
					</Text>
					<Text font="200 16px Poppins, sans-serif" margin="-10px 0px 16px 0px">
						SPEAKERS
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
					width="25%"
				>
					<Icon
						category="md"
						icon={MdToll}
						color="#fe4614"
						size="40px"
						margin="0px 0px -15px 0px"
					/>
					<Text font="30px Poppins, sans-serif">
						20
					</Text>
					<Text font="200 16px Poppins, sans-serif" margin="-10px 0px 16px 0px" sm-text-align="center">
						Some text
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" box-sizing="border-box" />
			<Text color="#373737" font="normal 400 40px/100% sans-serif" text-align="center">
				<Span
					color="#fe4614"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Event
				</Span>
				{" \n\t\t"}Schedules
			</Text>
			<Text color="#373737" font="normal 400 20px sans-serif" text-align="center" margin="0px 0px 16px 0px">
				Do not miss it and be sure to attend
			</Text>
			<Box
				display="flex"
				width="100%"
				height="auto"
				align-items="center"
				justify-content="center"
			>
				<Components.TabsList padding="12px 12px 12px 12px" display="block" defaultTab="1">
					<Override slot="Tab 608ab21e241b49cf9815f939">
						Day 01
					</Override>
					<Override
						slot="Tab"
						font="normal 400 20px/1.5 --fontFamily-googlePoppins"
						color="#313131"
						background="rgba(0, 119, 204, 0)"
						display="flex"
						align-items="center"
						justify-content="start"
						border-color="#000000"
						border-width="0 0 2px 0"
						border-style="solid"
						margin="10px 10px 10px 10px"
					/>
					<Override slot="Tab 608ab767061f7436517defc2">
						Some Text
					</Override>
					<Override
						slot="Tab :active"
						color="#fe4614"
						background="rgba(0, 119, 204, 0)"
						border-width="0 0 1px 0"
						border-style="solid"
					>
						Day 01
					</Override>
					<Override slot="Tab 608ab8703f6e794edf440cba">
						Day 01
					</Override>
					<Override slot="Tablist" flex-direction="row" justify-content="center" align-items="center" />
					<Override slot="Tab 608ac254c0430373797014b9">
						Day 02
					</Override>
					<Override slot="Tab 608ac25147992899ac321c2a">
						Day 03
					</Override>
					<Override slot="Tab 608ac2380bcaedc12e7a79c8">
						Day 04
					</Override>
					<Components.TabsItem
						tabId="1"
						lg-display="flex"
						lg-flex-direction="column"
						lg-justify-content="center"
						lg-align-items="center"
					>
						<Box
							display="flex"
							font="16px --fontFamily-googlePoppins"
							align-items="center"
							justify-content="center"
							lg-flex-direction="column"
							sm-width="100%"
						>
							<Box display="flex" margin="30px 30px 30px 30px" lg-margin="0px 30px 0px 30px">
								<Text width="auto" display="flex" margin="15px 15px 15px 15px" sm-margin="0px 15px 15px 15px">
									08:00 - 10:00 AM
								</Text>
							</Box>
							<Box display="flex" margin="30px 30px 30px 30px" lg-margin="0px 30px 0px 30px">
								<Image
									margin="12x 12x 12x 12x"
									src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/6.jpg?v=2021-04-29T08:21:00.050Z"
									width="100px"
									height="100px"
									border-radius="50px"
									lg-margin="0px 12x 0px 12x"
									sm-margin="2px 12x 0px 12x"
								/>
							</Box>
							<Box
								display="flex"
								flex-direction="column"
								margin="30px 30px 30px 0px"
								lg-align-items="center"
								lg-justify-content="center"
								lg-margin="0px 0px 0px 0px"
							>
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									font="600 16px Poppins, sans-serif"
									lg-text-align="center"
									lg-align-items="center"
									lg-justify-content="center"
									lg-margin="0px 15px 0px 15px"
									sm-margin="2px 15px 0px 15px"
								>
									Ben Sheridan
								</Text>
								<Text
									display="flex"
									color="#fe4614"
									width="auto"
									margin="-12px 15px 15px 15px"
									font="12px Poppins, sans-serif"
									lg-margin="0px 15px 0px 15px"
									lg-text-align="center"
									lg-align-items="center"
									lg-justify-content="center"
								>
									found & Seo
								</Text>
							</Box>
							<Box
								display="flex"
								flex-direction="column"
								width="40%"
								margin="30px 30px 30px 30px"
								lg-margin="0px 30px 0px 30px"
								sm-width="100%"
								sm-margin="10px 30px 10px 30px"
							>
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									font="600 16px --fontFamily-googlePoppins"
									lg-text-align="center"
									lg-margin="0px 15px 0px 15px"
									sm-align-items="center"
									sm-justify-content="center"
									sm-margin="0px 15px 2px 15px"
								>
									WordPress Theme Development Basic{" "}
								</Text>
								<Text
									display="flex"
									color="#000000"
									margin="-12px 15px 15px 15px"
									font="12px Poppins, sans-serif"
									lg-text-align="center"
									lg-margin="0px 15px 0px 15px"
									sm-margin="2px 15px 0px 15px"
								>
									In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment. This session will last for 2 hours. So prepare yourself.
								</Text>
							</Box>
						</Box>
						<Hr
							border-width="0.5px 0 0 0"
							border-style="solid"
							border-color="#000000"
							width="100%"
							height="auto"
						/>
						<Box
							display="flex"
							font="16px --fontFamily-googlePoppins"
							align-items="center"
							justify-content="center"
							background="#f2f2f2"
							lg-flex-direction="column"
						>
							<Box display="flex" margin="30px 30px 30px 30px" lg-margin="0px 0px 0px 0px">
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									lg-margin="23px 15px 0px 15px"
									sm-margin="23px 15px 15px 15px"
								>
									12:00 - 14:00 PM
								</Text>
							</Box>
							<Box display="flex" margin="30px 30px 30px 30px" lg-margin="0px 30px 0px 30px">
								<Image
									margin="12x 12x 12x 12x"
									src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/3.jpg?v=2021-04-29T08:21:00.634Z"
									width="100px"
									height="100px"
									border-radius="50px"
									lg-margin="0px 12x 0px 12x"
								/>
							</Box>
							<Box
								display="flex"
								flex-direction="column"
								margin="30px 30px 30px 0px"
								lg-margin="0px 0px 0px 0px"
								lg-align-items="center"
							>
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									font="600 16px Poppins, sans-serif"
									lg-text-align="center"
									lg-margin="0px 15px 0px 15px"
								>
									Sophie Lana
								</Text>
								<Text
									display="flex"
									color="#fe4614"
									width="auto"
									margin="-12px 15px 15px 15px"
									font="12px Poppins, sans-serif"
									lg-margin="0px 15px 0px 15px"
									lg-text-align="center"
								>
									found & Seo
								</Text>
							</Box>
							<Box
								display="flex"
								flex-direction="column"
								width="40%"
								margin="30px 30px 30px 30px"
								lg-margin="0px 30px 0px 30px"
								lg-align-items="center"
								lg-justify-content="center"
								sm-margin="10px 30px 10px 30px"
								sm-width="100%"
							>
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									font="600 16px --fontFamily-googlePoppins"
									lg-margin="0px 15px 0px 15px"
									lg-text-align="center"
								>
									Getting Started With WordPress
								</Text>
								<Text
									display="flex"
									color="#000000"
									margin="-12px 15px 15px 15px"
									font="12px Poppins, sans-serif"
									lg-margin="0px 15px 0px 15px"
									lg-text-align="center"
								>
									In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment. This session will last for 2 hours. So prepare yourself.
								</Text>
							</Box>
						</Box>
						<Hr
							border-width="0.5px 0 0 0"
							border-style="solid"
							border-color="#000000"
							height="auto"
							width="100%"
						/>
						<Box
							display="flex"
							font="16px --fontFamily-googlePoppins"
							align-items="center"
							justify-content="center"
							lg-flex-direction="column"
						>
							<Box display="flex" margin="30px 30px 30px 30px" lg-margin="0px 0px 0px 0px">
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									lg-margin="0px 15px 0px 15px"
									sm-margin="0px 15px 15px 15px"
								>
									16:00 - 18:00 PM
								</Text>
							</Box>
							<Box display="flex" margin="30px 30px 30px 30px" lg-margin="0px 30px 0px 30px">
								<Image
									margin="12x 12x 12x 12x"
									src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/5.jpg?v=2021-04-29T08:21:00.049Z"
									width="100px"
									height="100px"
									border-radius="50px"
								/>
							</Box>
							<Box display="flex" flex-direction="column" margin="30px 30px 30px 0px" lg-margin="0px 0px 0px 0px">
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									font="600 16px Poppins, sans-serif"
									lg-margin="0px 15px 0px 15px"
								>
									James Hoult
								</Text>
								<Text
									display="flex"
									color="#fe4614"
									width="auto"
									margin="-12px 15px 15px 15px"
									font="12px Poppins, sans-serif"
									lg-margin="0px 15px 0px 15px"
									lg-align-items="center"
									lg-justify-content="center"
								>
									found & Seo
								</Text>
							</Box>
							<Box
								display="flex"
								flex-direction="column"
								width="40%"
								margin="30px 30px 30px 30px"
								lg-margin="0px 30px 0px 30px"
								lg-align-items="center"
								lg-justify-content="center"
								sm-margin="10px 30px 10px 30px"
								sm-width="100%"
							>
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									font="600 16px --fontFamily-googlePoppins"
									lg-margin="0px 15px 0px 15px"
									lg-text-align="center"
								>
									Prepare Your Hosting & Domain
								</Text>
								<Text
									display="flex"
									color="#000000"
									margin="-12px 15px 15px 15px"
									font="12px Poppins, sans-serif"
									lg-margin="0px 15px 0px 15px"
									lg-text-align="center"
								>
									In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment. This session will last for 2 hours. So prepare yourself.
								</Text>
							</Box>
						</Box>
						<Hr
							border-width="0.5px 0 0 0"
							border-style="solid"
							border-color="#000000"
							height="auto"
							width="100%"
						/>
						<Box
							display="flex"
							font="16px --fontFamily-googlePoppins"
							align-items="center"
							justify-content="center"
							background="#f2f2f2"
							lg-flex-direction="column"
						>
							<Box display="flex" margin="30px 30px 30px 30px" lg-margin="0px 30px 0px 30px">
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									lg-margin="23px 15px 0px 15px"
									sm-margin="23px 15px 15px 15px"
								>
									20:00 - 22:00 PM
								</Text>
							</Box>
							<Box display="flex" margin="30px 30px 30px 30px" lg-margin="0px 30px 0px 30px">
								<Image
									margin="12x 12x 12x 12x"
									src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/7.jpg?v=2021-04-29T08:21:00.050Z"
									width="100px"
									height="100px"
									border-radius="50px"
									lg-margin="0px 12x 0px 12x"
								/>
							</Box>
							<Box display="flex" flex-direction="column" margin="30px 30px 30px 0px" lg-margin="0px 0px 0px 0px">
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									font="600 16px Poppins, sans-serif"
									lg-margin="0px 15px 0px 15px"
									lg-align-items="center"
									lg-justify-content="center"
									lg-text-align="center"
								>
									Oscar Helman
								</Text>
								<Text
									display="flex"
									color="#fe4614"
									width="auto"
									margin="-12px 15px 15px 15px"
									font="12px Poppins, sans-serif"
									lg-margin="0px 15px 0px 15px"
									lg-align-items="center"
									lg-justify-content="center"
								>
									found & Seo
								</Text>
							</Box>
							<Box
								display="flex"
								flex-direction="column"
								width="40%"
								margin="30px 30px 30px 30px"
								lg-margin="0px 30px 0px 30px"
								sm-width="100%"
								sm-margin="10px 30px 10px 30px"
							>
								<Text
									width="auto"
									display="flex"
									margin="15px 15px 15px 15px"
									font="600 16px --fontFamily-googlePoppins"
									lg-margin="0px 15px 0px 15px"
									lg-text-align="center"
								>
									WordPress Theme Development Basic
								</Text>
								<Text
									display="flex"
									color="#000000"
									margin="-12px 15px 15px 15px"
									font="12px Poppins, sans-serif"
									lg-margin="0px 15px 0px 15px"
									lg-text-align="center"
								>
									In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment. This session will last for 2 hours. So prepare yourself.
								</Text>
							</Box>
						</Box>
					</Components.TabsItem>
				</Components.TabsList>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0" background="linear-gradient(0deg,rgba(0, 0, 0, 0.6) 0%,rgba(0, 0, 0, 0.6) 100%),rgba(0, 0, 0, 0) url(https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/Philo__2.jpg?v=2021-05-03T16:38:36.291Z) 0% 0% /cover no-repeat scroll padding-box">
			<Override slot="SectionContent" align-items="center" box-sizing="border-box" />
			<Text color="#ffffff" font="normal 400 40px/100% sans-serif" text-align="center">
				<Span color="#fe4614">
					They{" "}
				</Span>
				Says
			</Text>
			<Box
				display="flex"
				width="100%"
				height="auto"
				align-items="center"
				justify-content="center"
				md-flex-direction="column"
			>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="flex-start"
					justify-content="start"
					flex-direction="column"
					margin="0px 20px 0px 20px"
					md-justify-content="center"
					md-align-items="center"
				>
					<Text
						color="#ffffff"
						font="normal 400 20px/1.2 --fontFamily-googlePoppins"
						text-align="left"
						margin="16px 8px 16px 0px"
						md-text-align="center"
					>
						I had to sell the house, I didn't know how to do it properly. I started looking at ads for the query "I will sell the house" and came to the conclusion that{" "}
						<br />
					</Text>
					<Text
						color="#fe4614"
						font="normal 400 20px/100% --fontFamily-googlePoppins"
						text-align="left"
						margin="0px 0px 16px 0px"
						md-text-align="center"
					>
						James cook
					</Text>
				</Box>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="flex-start"
					justify-content="start"
					flex-direction="column"
					margin="0px 20px 0px 20px"
					md-justify-content="center"
					md-align-items="center"
				>
					<Text color="#ffffff" font="normal 400 20px/1.2 --fontFamily-googlePoppins" text-align="left" md-text-align="center">
						I had to sell the house, I didn't know how to do it properly. I started looking at ads for the query "I will sell the house" and came to the conclusion that{" "}
					</Text>
					<Text
						color="#fe4614"
						font="normal 400 20px/100% --fontFamily-googlePoppins"
						text-align="left"
						margin="0px 0px 16px 0px"
						md-text-align="center"
					>
						James cook
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" box-sizing="border-box" />
			<Text color="#373737" font="normal 400 40px/100% sans-serif" text-align="center">
				<Span
					color="#fe4614"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					Event
				</Span>
				{" \n\t\t\n\t\t"}Sponsors
			</Text>
			<Text color="#373737" font="normal 400 20px sans-serif" text-align="center" margin="0px 0px 46px 0px">
				Check who make this event possible
			</Text>
			<Text color="#373737" font="normal 600 20px sans-serif" text-align="center" margin="0px 0px 16px 0px">
				Gold Sponsors
			</Text>
			<Box
				display="flex"
				width="50%"
				height="auto"
				align-items="center"
				justify-content="center"
				md-flex-direction="column"
				margin="0px 0px 80px 0px"
			>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
				>
					<Image width="300px" height="auto" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/1.png?v=2021-05-03T17:16:20.523Z" />
				</Box>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
				>
					<Image width="300px" height="auto" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/2.png?v=2021-05-03T17:16:20.527Z" />
				</Box>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
				>
					<Image width="300px" height="auto" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/3.png?v=2021-05-03T17:16:20.524Z" />
				</Box>
			</Box>
			<Text color="#373737" font="normal 600 20px sans-serif" text-align="center" margin="16px 0px 16px 0px">
				Silver Sponsors
			</Text>
			<Box
				display="flex"
				width="100%"
				height="auto"
				align-items="center"
				justify-content="center"
				md-flex-direction="column"
			>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
				>
					<Image width="300px" height="auto" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/a1.png?v=2021-05-03T17:16:20.522Z" margin="0px 30px 0px 30px" />
				</Box>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
				>
					<Image width="300px" height="auto" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/a2.png?v=2021-05-03T17:16:20.525Z" />
				</Box>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
				>
					<Image width="300px" height="auto" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/a3.png?v=2021-05-03T17:16:20.528Z" />
				</Box>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
				>
					<Image width="300px" height="auto" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/a5.png?v=2021-05-03T17:16:20.529Z" />
				</Box>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
				>
					<Image width="300px" height="auto" src="https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/a4.png?v=2021-05-03T17:16:20.527Z" margin="0px 30px 0px 30px" />
				</Box>
			</Box>
		</Section>
		<Section
			padding="100px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0, 0, 0, 0.8) 0%,rgba(0, 0, 0, 0.8) 100%),rgba(0, 0, 0, 0) url(https://test-upl.quarkly.io/608914b7cbbb490022ea9ad8/images/94-941208_data-src.jpg?v=2021-05-03T17:22:52.966Z) 0% 0% /auto repeat scroll padding-box"
			flex-direction="column"
			lg-align-items="center"
			lg-justify-content="center"
		>
			<Override slot="SectionContent" align-items="center" box-sizing="border-box" />
			<Text color="#ffffff" font="normal 400 40px/100% sans-serif" text-align="center">
				<Span color="#fe4614">
					Get
				</Span>
				{" "}Tickets
			</Text>
			<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="0px 0px 56px 0px">
				Join the biggest digital event of the year
			</Text>
			<Box
				display="flex"
				width="100%"
				height="auto"
				align-items="center"
				justify-content="center"
				md-flex-direction="column"
				lg-flex-direction="column"
			>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
					background="#313131"
					margin="0px 20px 0px 20px"
					flex-direction="column"
					lg-margin="20px 20px 20px 20px"
				>
					<Text color="#ffffff" font="normal 400 30px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
						Early Bird
					</Text>
					<Text color="#ffffff" font="normal 400 30px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
						<Span color="#fe4614">
							$
						</Span>
						{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="700 40px Poppins, sans-serif"
						>
							39
						</Strong>
						{" "}/1 person
					</Text>
					<Box
						display="flex"
						width="100%"
						height="auto"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#232323"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#464646"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#232323"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#464646"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#232323"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Button
							padding="8px 24px 8px 24px"
							background="#fe4614"
							border-radius="50px"
							font="normal 500 16px/1.5 --fontFamily-googlePoppins"
							margin="20px 12px 20px 12px"
						>
							GET TICKET
						</Button>
					</Box>
				</Box>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
					background="#313131"
					margin="0px 20px 0px 20px"
					flex-direction="column"
					lg-margin="20px 20px 20px 20px"
				>
					<Text color="#ffffff" font="normal 400 30px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
						Early Bird
					</Text>
					<Text color="#ffffff" font="normal 400 30px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
						<Span color="#fe4614">
							$
						</Span>
						{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="700 40px Poppins, sans-serif"
						>
							39
						</Strong>
						{" "}/1 person
					</Text>
					<Box
						display="flex"
						width="100%"
						height="auto"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#232323"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#464646"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#232323"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#464646"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#232323"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Button
							padding="8px 24px 8px 24px"
							background="#fe4614"
							border-radius="50px"
							font="normal 500 16px/1.5 --fontFamily-googlePoppins"
							margin="20px 12px 20px 12px"
						>
							GET TICKET
						</Button>
					</Box>
				</Box>
				<Box
					display="flex"
					width="100%"
					height="auto"
					align-items="center"
					justify-content="center"
					background="#313131"
					margin="0px 20px 0px 20px"
					flex-direction="column"
					lg-margin="20px 20px 20px 20px"
				>
					<Text color="#ffffff" font="normal 400 30px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
						Early Bird
					</Text>
					<Text color="#ffffff" font="normal 400 30px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
						<Span color="#fe4614">
							$
						</Span>
						{" "}
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							font="700 40px Poppins, sans-serif"
						>
							39
						</Strong>
						{" "}/1 person
					</Text>
					<Box
						display="flex"
						width="100%"
						height="auto"
						align-items="center"
						justify-content="center"
						flex-direction="column"
					>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#232323"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#464646"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#232323"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#464646"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Box
							display="flex"
							width="100%"
							height="auto"
							align-items="center"
							justify-content="start"
							background="#232323"
							lg-justify-content="center"
						>
							<Icon category="md" icon={MdDone} color="#fe4614" margin="0px 10px 0px 10px" />
							<Text color="#ffffff" font="normal 400 20px --fontFamily-googlePoppins" text-align="center" margin="16px 0px 16px 0px">
								1 Conference Day
							</Text>
						</Box>
						<Button
							padding="8px 24px 8px 24px"
							background="#fe4614"
							border-radius="50px"
							font="normal 500 16px/1.5 --fontFamily-googlePoppins"
							margin="20px 12px 20px 12px"
						>
							GET TICKET
						</Button>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" box-sizing="border-box" />
			<Text color="#373737" font="normal 400 40px/100% sans-serif" text-align="center">
				<Span color="#fe4614">
					Venue{" "}
				</Span>
				Information
			</Text>
			<Text color="#373737" font="normal 400 20px sans-serif" text-align="center" margin="0px 0px 46px 0px">
				Everything you need, 24 hours
			</Text>
			<Box
				display="flex"
				width="100%"
				color="#ffffff"
				font="16px --fontFamily-googlePoppins"
				sm-flex-direction="column"
				sm-align-items="center"
				sm-justify-content="center"
				margin="20px 0px 20px 0px"
				lg-flex-direction="column"
			>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
					width="100%"
					height="auto"
					margin="0px 20px 0px 20px"
				>
					<Icon category="md" icon={MdAssignment} color="#fe4614" size="40px" />
					<Text font="400 20px Poppins, sans-serif" color="#000000" margin="16px 0px 30px 0px" letter-spacing="0.08rem">
						PARTICIPANTS
					</Text>
					<Text
						font="300 18px Poppins, sans-serif"
						color="#000000"
						margin="0px 0px 16px 0px"
						lg-text-align="center"
						text-align="center"
					>
						Large audiotorium with capacity of fifty thousand participants is also equipped with advanced facilities for your pleasure.
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
					width="100%"
					height="auto"
					margin="0px 20px 0px 20px"
				>
					<Icon category="md" icon={MdCardMembership} color="#fe4614" size="40px" />
					<Text font="400 20px Poppins, sans-serif" color="#000000" margin="16px 0px 30px 0px">
						Transport
					</Text>
					<Text font="300 18px Poppins, sans-serif" color="#000000" margin="0px 0px 16px 0px" text-align="center">
						The location of the seminar is located in the city center so it is easily reached by private or public vehicles which available{" "}
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="center"
					width="100%"
					height="auto"
					margin="0px 20px 0px 20px"
				>
					<Icon category="md" icon={MdHearing} color="#fe4614" size="40px" />
					<Text font="400 20px Poppins, sans-serif" color="#000000" margin="16px 0px 30px 0px" letter-spacing="0.08rem">
						SPEAKERS
					</Text>
					<Text font="300 18px Poppins, sans-serif" color="#000000" margin="0px 0px 16px 0px" text-align="center">
						The location of the seminar is located in the city center so it is easily reached by private or public vehicles which available{" "}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" box-sizing="border-box" />
			<Text color="#373737" font="normal 400 40px/100% sans-serif" text-align="center">
				<Span color="#fe4614">
					Venue{" "}
				</Span>
				Information
			</Text>
			<Text color="#373737" font="normal 400 20px sans-serif" text-align="center" margin="0px 0px 46px 0px">
				Everything you need, 24 hours
			</Text>
			<Box
				display="flex"
				width="100%"
				color="#ffffff"
				font="16px --fontFamily-googlePoppins"
				sm-flex-direction="column"
				sm-align-items="center"
				sm-justify-content="center"
				margin="20px 0px 20px 0px"
				lg-flex-direction="column"
			>
				<Components.CardTest />
				<Components.CardTest>
					<Override slot="text" font="italic 28px Poppins, sans-serif">
						Transport
					</Override>
					<Override slot="text1">
						The location of the seminar is located in the city center so it is easily reached by private or public vehicles which available{" "}
					</Override>
				</Components.CardTest>
				<Components.CardTest>
					<Override slot="text">
						SPEAKERS
					</Override>
					<Override slot="text1">
						The location of the seminar is located in the city center so it is easily reached by private or public vehicles which available{" "}
					</Override>
				</Components.CardTest>
			</Box>
		</Section>
		<Components.QuarklycommunityKitYandexMap height="500px" filter="brightness(50%)" />
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" box-sizing="border-box" />
			<Box
				display="flex"
				width="100%"
				color="#ffffff"
				font="16px --fontFamily-googlePoppins"
				sm-flex-direction="column"
				sm-align-items="center"
				sm-justify-content="center"
				margin="20px 0px 20px 0px"
				lg-flex-direction="column"
			>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					width="100%"
					height="auto"
					margin="0px 20px 0px 20px"
				>
					<Icon
						category="md"
						icon={MdAssignment}
						color="#fe4614"
						size="40px"
						margin="0px 0px 8px 0px"
					/>
					<Text font="400 20px Poppins, sans-serif" color="#000000" margin="16px 0px 10px 0px">
						Call Us
					</Text>
					<Text
						font="300 18px Poppins, sans-serif"
						color="#000000"
						margin="0px 0px 16px 0px"
						lg-text-align="center"
						text-align="center"
					>
						208) 333 9296
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					width="100%"
					height="auto"
					margin="0px 20px 0px 20px"
				>
					<Icon
						category="md"
						icon={MdCardMembership}
						color="#fe4614"
						size="40px"
						margin="0px 0px 8px 0px"
					/>
					<Text font="400 20px Poppins, sans-serif" color="#000000" margin="16px 0px 10px 0px">
						Address
					</Text>
					<Text font="300 18px Poppins, sans-serif" color="#000000" margin="0px 0px 16px 0px" text-align="center">
						Orange County Convention Center,
						<br />
						9800 International Dr,
						<br />
						Orlando, FL 32819, USA
					</Text>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					align-items="center"
					justify-content="flex-start"
					width="100%"
					height="auto"
					margin="0px 20px 0px 20px"
				>
					<Icon
						category="md"
						icon={MdHearing}
						color="#fe4614"
						size="40px"
						margin="0px 0px 8px 0px"
					/>
					<Text font="400 20px Poppins, sans-serif" color="#000000" margin="16px 0px 10px 0px">
						Email Us
					</Text>
					<Text font="300 18px Poppins, sans-serif" color="#000000" margin="0px 0px 16px 0px" text-align="center">
						contact@eventbiz.com
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="--color-dark" padding="60px 0" sm-padding="40px 0">
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
		<Components.EmbedJsBoardCrm />
		<Components.EmbedHtmlBoardCrm />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});
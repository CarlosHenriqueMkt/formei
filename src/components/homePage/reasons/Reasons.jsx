import { Box, Heading, Text } from "@chakra-ui/react";
import { IoDiamondOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { MdPriceCheck } from "react-icons/md";
import "./reasons.css";
import React from "react";

export const Reasons = () => {
	return (
		<>
			<Box display="flex" flexDirection="column" className="container">
				<Box>
					<Heading
						as="h2"
						textAlign="center"
						margin="20px 0 10px 0"
						size="2xl"
						color="#1D4259"
					>
						Diferenciais da Formei
					</Heading>
				</Box>
				<Box className="containerReasons">
					<Box className="allBoxes">
						<Box className="iconBg">
							<IoDiamondOutline className="iconReasons" />
						</Box>
						<Text>Lapidação talentos</Text>
					</Box>
					<Box className="allBoxes">
						<Box className="iconBg">
							<GiTeacher className="iconReasons" />
						</Box>
						<Text>Metodologia exclusiva</Text>
					</Box>
					<Box className="allBoxes">
						<Box className="iconBg">
							<MdPriceCheck className="iconReasons" />
						</Box>
						<Text>Preço acessível</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};

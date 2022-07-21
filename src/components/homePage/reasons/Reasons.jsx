import { Box, Text } from "@chakra-ui/react";
import { IoDiamondOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { MdPriceCheck } from "react-icons/md";
import "./reasons.css";
import React from "react";

export const Reasons = () => {
	return (
		<>
			<Box
				display="flex"
				flexDirection="column"
				className="reasonsContainer"
			>
				<h2 className="reasonsTitle" id="reasons">
					Diferenciais da Formei
				</h2>
				<Box className="reasons">
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

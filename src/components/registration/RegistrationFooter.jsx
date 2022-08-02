import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../utils/assets/media/Logos/logo-nobg.png";

export const RegistrationFooter = () => {
	return (
		<>
			<Box className="registrationFooter">
				<Image src={logo} />
				<Text as="p">
					<Link to="/">Voltar a página inicial</Link>
				</Text>
			</Box>
		</>
	);
};

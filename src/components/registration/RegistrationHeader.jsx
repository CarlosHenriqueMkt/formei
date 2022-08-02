import React from "react";
import { Box, Image } from "@chakra-ui/react";
import logo from "../../utils/assets/media/Logos/logo-nobg.png";

export const RegistrationHeader = () => {
	return (
		<>
			<Box className="registrationHeader">
				<Image src={logo} alt="Logotipo Formei" />
			</Box>
		</>
	);
};

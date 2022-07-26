import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./faleconosco.css";

export const FaleConosco = () => {
	const handleClick = () => {
		window.open("https://wa.me/5521968596296");
	};
	return (
		<>
			<button onClick={handleClick}>
				<Box className="contact">
					<Heading as="h5"> Fale conosco </Heading>
					<FaWhatsapp className="socialIcon" />
				</Box>
			</button>
		</>
	);
};

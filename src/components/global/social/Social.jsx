import { Box, Link, Heading } from "@chakra-ui/react";
import React from "react";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./social.css";

export const Social = () => {
	const handleClick = () => {
		window.open("https://wa.me/5521968596296");
	};

	return (
		<>
			<Box className="socialLinks" id="contact">
				<button onClick={handleClick}>
					<Box className="contact">
						<Heading as="h4"> Fale conosco </Heading>
						<FaWhatsapp className="socialIcon" />
					</Box>
				</button>

				<Box className="socialBox">
					<Link
						href="https://www.facebook.com/formeiqualificacaoprofissional"
						target="_blank"
					>
						<FaFacebookSquare className="socialIcon" />
					</Link>
					<Link
						href="https://www.instagram.com/formeiqprofissional/"
						target="_blank"
					>
						<FaInstagram className="socialIcon" />
					</Link>
				</Box>
			</Box>
		</>
	);
};

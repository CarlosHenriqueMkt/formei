import { Box, Link } from "@chakra-ui/react";
import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import "./social.css";

export const Social = () => {
	return (
		<>
			<Box className="socialLinks">
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
		</>
	);
};

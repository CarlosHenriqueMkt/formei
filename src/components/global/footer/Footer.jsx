import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
	return (
		<>
			<Box className="footerContainer">
				<Box className="footerCursos">
					<Heading as="h4">Cursos</Heading>
					<Box>
						<Link to="/bucal">Auxiliar de Saúde Bucal</Link>
						<Link to="/farma">Auxiliar de Farmacêutico</Link>
						<Link to="/vet">Auxiliar de Veterinário</Link>
						<Link to="/creche">Auxiliar de Creche e Berçário</Link>
					</Box>
				</Box>
				<Box className="footerFormei">
					<Heading as="h4">Formei</Heading>
					<Box>
						<a href="#hero">Início</a>
						<a href="#about">Sobre nós</a>
						<a href="#depoiments">Depoimentos</a>
						<a href="#contact">Contato</a>
					</Box>
				</Box>
			</Box>
		</>
	);
};

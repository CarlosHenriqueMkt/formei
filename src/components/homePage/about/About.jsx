import { Box } from "@chakra-ui/react";
import React from "react";
import "./about.css";

export const About = () => {
	return (
		<>
			<Box className="container">
				<Box className="aboutContainer">
					<Box className="aboutTitle" id="about">
						<h2>Formei</h2>
						<p>
							A escola de qualificação profissional que vai mudar
							a sua vida, possibilitando a conquista de uma vaga
							no mercado de trabalho.
						</p>
					</Box>
					<Box className="aboutContent">
						<Box className="aboutBox">
							<h3>+3000</h3>
							<p>Alunos formados</p>
						</Box>
						<Box className="aboutBox">
							<h3>+700</h3>
							<p>Estagiários alocados</p>
						</Box>
						<Box className="aboutBox">
							<h3>+20</h3>
							<p>Empresas parceiras</p>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

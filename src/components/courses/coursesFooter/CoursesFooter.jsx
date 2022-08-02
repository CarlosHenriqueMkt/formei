import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./coursesfooter.css";

export const CoursesFooter = () => {
	return (
		<>
			<Box className="coursesFooterContainer">
				<Box className="coursesFooterCursos">
					<Heading as="h4">Cursos</Heading>
					<Box>
						<Link to="/farma">Auxiliar de Farmacêutico</Link>
						<Link to="/vet">Auxiliar de Veterinário</Link>
						<Link to="/creche">Auxiliar de Creche e Berçário</Link>
					</Box>
				</Box>
				<Box className="coursesFooterFormei">
					<Heading as="h4">Formei</Heading>
					<Box>
						<a href="#banner">Início</a>
						<a href="#description">Descrição</a>
						<a href="#professional">Perfil Profissional</a>
						<a href="#depoiments">Depoimentos</a>
					</Box>
				</Box>
			</Box>
		</>
	);
};

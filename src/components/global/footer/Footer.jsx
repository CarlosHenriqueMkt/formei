import React from "react";
import { Box, Heading, Link } from "@chakra-ui/react";
import "./footer.css";

export const Footer = () => {
	return (
		<>
			<Box className="footerContainer">
				<Box className="footerCursos">
					<Heading as="h4">Cursos</Heading>
					<Box>
						<Link>Auxiliar de Saúde Bucal</Link>
						<Link>Auxiliar de Farmacêutico</Link>
						<Link>Auxiliar de Veterinário</Link>
						<Link>Auxiliar de Creche e Berçário</Link>
					</Box>
				</Box>
				<Box className="footerFormei">
					<Heading as="h4">Formei</Heading>
					<Box>
						<Link>Início</Link>
						<Link>Diferencial </Link>
						<Link>Sobre nós</Link>
						<Link>Depoimentos</Link>
						<Link>Contato</Link>
					</Box>
				</Box>
			</Box>
		</>
	);
};

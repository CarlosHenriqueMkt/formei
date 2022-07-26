import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "./bulletpoints.css";

export const BulletPoints = () => {
	return (
		<>
			<Box className="bulletContainer" id="professional">
				<Heading as="h3">Perfil Profissional</Heading>
				<Box className="bulletBoxesContainer">
					<Box className="bulletBox">
						<Heading as="h5">Boa comunicação</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer ut purus sit amet diam fringilla
							scelerisque eget in velit. Ut nec laoreet dolor, eu
							luctus mauris.
						</Text>
					</Box>
					<Box className="bulletBox">
						<Heading as="h5">Boa concentração</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer ut purus sit amet diam fringilla
							scelerisque eget in velit. Ut nec laoreet dolor, eu
							luctus mauris.
						</Text>
					</Box>
				</Box>
				<Box className="bulletBoxesContainer">
					<Box className="bulletBox">
						<Heading as="h5">Gosta de ler e escrever</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer ut purus sit amet diam fringilla
							scelerisque eget in velit. Ut nec laoreet dolor, eu
							luctus mauris.
						</Text>
					</Box>
					<Box className="bulletBox">
						<Heading as="h5">
							Sabe lidar com situações adversas
						</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Integer ut purus sit amet diam fringilla
							scelerisque eget in velit. Ut nec laoreet dolor, eu
							luctus mauris.
						</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};

import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import "./description.css";
import { FaUserClock } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { GiFaceToFace } from "react-icons/gi";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { ButtonMatricula } from "../../../global/buttonMatricula/ButtonMatricula";

export const Description = () => {
	return (
		<>
			<Box className="desContainer">
				<Box className="descriptionBox" id="description">
					<Heading as="h4">Sobre o curso</Heading>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc non ullamcorper libero. Morbi fringilla dignissim
						dui porta lobortis. Etiam non vestibulum ligula. Fusce
						pretium ornare tellus quis hendrerit. Nam imperdiet
						elementum ligula sit amet consectetur. Donec scelerisque
						sem et enim ullamcorper vulputate. Etiam elementum quis
						nibh non placerat. Proin sed feugiat ex, eu auctor quam.
					</Text>

					<Box className="descButton">
						<ButtonMatricula />
					</Box>
				</Box>

				<Box className="fichaContainer">
					<Heading as="h4">Ficha do curso</Heading>
					<Box className="descBox">
						<Box className="descIcon">
							<FaUserClock />
						</Box>
						<Box className="descParagh">
							<Text>Duração:</Text>
							<Text>6 meses</Text>
						</Box>
					</Box>
					<Box className="descBox">
						<Box className="descIcon">
							<TbCertificate />
						</Box>
						<Box className="descParagh">
							<Text>Certificação conferida:</Text>
							<Text>Curso profissionalizante</Text>
						</Box>
					</Box>
					<Box className="descBox">
						<Box className="descIcon">
							<GiFaceToFace />
						</Box>
						<Box className="descParagh">
							<Text>Modalidade de ensino:</Text>
							<Text>Presencial</Text>
						</Box>
					</Box>

					<button className="gradeButton">
						<BsFillBookmarkStarFill className="gradeIcon" />
						Veja a Grade Curricular!
					</button>
				</Box>
			</Box>
		</>
	);
};

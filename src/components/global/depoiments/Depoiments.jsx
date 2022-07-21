import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import depoimentos from "./data";
import "./depoiments.css";

export const Depoiments = () => {
	return (
		<Box className="dpContainer">
			<Box className="dpTitle">
				<Heading as="h3" size="lg">
					Depoimentos
				</Heading>
				<Box>
					<Button className="dpButton">
						<GrFormPrevious />
					</Button>
					<Button className="dpButton">
						<GrFormNext />
					</Button>
				</Box>
			</Box>
			{depoimentos.map((depoiments) => {
				const { name, text, img } = depoiments;

				return (
					<Box className="dpBoxes">
						<Box className="depoiments">
							<Text>{text}</Text>
							<Image src={img} alt="Estudante da Formei" />
							<Heading as="h4" size="md">
								{name}
							</Heading>
						</Box>
						<Box className="depoiments">
							<Text>{text}</Text>
							<Image src={img} alt="Estudante da Formei" />
							<Heading as="h4" size="md">
								{name}
							</Heading>
						</Box>
					</Box>
				);
			})}
		</Box>
	);
};

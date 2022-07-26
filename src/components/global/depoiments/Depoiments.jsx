import React, { useState } from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import depoimentos from "./data";
import "./depoiments.css";

export const Depoiments = () => {
	const [currentDep, setCurrentDep] = useState(0);

	const prev = () => {
		const index = currentDep > 0 ? currentDep - 1 : depoimentos.length - 1;
		setCurrentDep(index);
	};

	const next = () => {
		const index = currentDep < depoimentos.length - 1 ? currentDep + 1 : 0;
		setCurrentDep(index);
	};

	return (
		<>
			<Box className="titleContainer">
				<Box className="dpTitle">
					<Heading as="h3" size="lg" id="depoiments">
						Depoimentos
					</Heading>
					<Box>
						<Button className="dpButton">
							<GrFormPrevious onClick={prev} />
						</Button>
						<Button className="dpButton">
							<GrFormNext onClick={next} />
						</Button>
					</Box>
				</Box>
			</Box>
			<Box className="dpContainer">
				<Box
					className="dpBoxes"
					style={{ transform: `translateX(${-currentDep * 100}%)` }}
				>
					{depoimentos.map((depoiments) => {
						const { name, text, img } = depoiments;

						return (
							<Box className="depoiments">
								<Text>{text}</Text>
								<Image src={img} alt="Estudante da Formei" />
								<Heading as="h4" size="md">
									{name}
								</Heading>
							</Box>
						);
					})}
				</Box>
			</Box>
		</>
	);
};

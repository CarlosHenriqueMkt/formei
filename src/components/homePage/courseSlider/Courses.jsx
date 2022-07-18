import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./course.css";
import courses from "./data";

export const Courses = () => {
	return (
		<>
			<Box className="coursesContainer">
				<Box className="coursesTitle">
					<Heading as="h2" size="lg">
						{" "}
						Nossos cursos{" "}
					</Heading>
				</Box>
				<Box className="coursesBox">
					{courses.map((courses) => {
						const { image, title, price, link } = courses;

						return (
							<>
								<Box className="coursesBoxItem">
									<Image src={image}></Image>
									<Heading as="h3" size="sm">
										{title}
									</Heading>
									<Text as="p">R$ {price}</Text>
									<Button href={link}>
										Matricule-se agora!
									</Button>
								</Box>
							</>
						);
					})}
				</Box>
			</Box>
		</>
	);
};

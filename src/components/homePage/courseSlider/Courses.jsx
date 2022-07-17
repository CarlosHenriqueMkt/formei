import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./course.css";
import courses from "./data";

export const Courses = () => {
	return (
		<>
			<Box className="coursesContainer">
				<Box className="coursesTitle">
					<Box>
						<Heading as="h2" size="md">
							{" "}
							Nossos cursos{" "}
						</Heading>
					</Box>
					<Box>
						<Button>
							<GrFormPrevious className="courseIcon" />
						</Button>
						<Button>
							<GrFormNext className="courseIcon" />
						</Button>
					</Box>
				</Box>
				<Box className="coursesBox">
					{courses.map((courses) => {
						const { image, title, price, link } = courses;

						return (
							<>
								<Image src={image}></Image>
								<Heading as="h3" size="sm">
									{title}
								</Heading>
								<Text as="p">R$ {price}</Text>
								<Button href={link}>Matricule-se agora!</Button>
							</>
						);
					})}
				</Box>
			</Box>
		</>
	);
};

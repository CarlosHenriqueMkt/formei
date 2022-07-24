import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import "./course.css";
import courses from "./data";

export const Courses = () => {
	return (
		<>
			<Box className="coursesContainer">
				<Box className="coursesTitle">
					<Heading as="h2" size="lg" id="courses">
						{" "}
						Nossos cursos{" "}
					</Heading>
				</Box>
				<Box className="coursesBox">
					{courses.map((courses) => {
						const { image, title, link } = courses;

						return (
							<>
								<Box className="coursesBoxItem">
									<Image src={image}></Image>
									<Heading as="h3" size="sm">
										{title}
									</Heading>

									<Button href={link}>Saiba mais!</Button>
								</Box>
							</>
						);
					})}
				</Box>
			</Box>
		</>
	);
};

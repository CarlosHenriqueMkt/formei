import React from "react";
import "./buttonmatricula.css";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

export const ButtonMatricula = () => {
	return (
		<>
			<button>
				<Link to="/registration" className="matricula">
					<Heading as="h5"> Matricule-se! </Heading>
				</Link>
			</button>
		</>
	);
};

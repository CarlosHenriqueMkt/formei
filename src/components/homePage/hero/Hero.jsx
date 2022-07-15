import React from "react";
import { Carousel } from "./Carousel";
import slides from "./data";

export const Hero = () => {
	return (
		<div className="container">
			<Carousel slides={slides} />
		</div>
	);
};

import React from "react";
import { Carousel } from "./Carousel";
import slides from "./data1";

export const Hero = () => {
	return (
		<div className="container">
			<Carousel
				slides={slides}
				controls
				interval={3000}
				autoPlay={true}
			/>
		</div>
	);
};

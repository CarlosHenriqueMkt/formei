import React from "react";
import { CarouselItem } from "./CarouselItem";

export const Carousel = ({ slides }) => {
	return (
		<div className="carousel">
			<div className="carouselInner">
				{slides.map((slide, index) => (
					<div className="carouselItem">
						<CarouselItem slide={slide} key={index} />
					</div>
				))}
			</div>
		</div>
	);
};

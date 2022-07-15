import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { CarouselControls } from "./CarouselControls";
import { CarouselItem } from "./CarouselItem";
import "./carousel.css";

export const Carousel = ({ slides }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const prev = () => {
		const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
		setCurrentSlide(index);
	};

	const next = () => {
		const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
		setCurrentSlide(index);
	};

	useEffect(() => {
		const slideInterval = setInterval(() => {
			setCurrentSlide((currentSlide) =>
				currentSlide < slides.length - 1 ? currentSlide + 1 : 0
			);
		}, 3000);

		return () => clearInterval(slideInterval);
	});

	return (
		<Box className="carousel">
			<Box
				className="carouselInner"
				style={{ transform: `translateX(${-currentSlide * 100}%)` }}
			>
				{slides.map((slide, index) => (
					<Box className="carouselItem">
						<CarouselItem slide={slide} key={index} />
					</Box>
				))}
			</Box>
			<CarouselControls prev={prev} next={next} />
		</Box>
	);
};

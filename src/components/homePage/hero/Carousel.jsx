import React, { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { CarouselControls } from "./CarouselControls";
import { CarouselItem } from "./CarouselItem";
import "./carousel.css";

export const Carousel = ({
	slides,
	interval = 3000,
	controls = false,
	autoPlay,
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideInterval = useRef();

	const prev = () => {
		startSlideTimer();
		const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
		setCurrentSlide(index);
	};

	const next = () => {
		startSlideTimer();
		const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
		setCurrentSlide(index);
	};

	const startSlideTimer = () => {
		if (autoPlay) {
			stopSlideTimer();
			slideInterval.current = setInterval(() => {
				setCurrentSlide((currentSlide) =>
					currentSlide < slides.length - 1 ? currentSlide + 1 : 0
				);
			}, interval);
		}
	};

	const stopSlideTimer = () => {
		if (autoPlay && slideInterval.current) {
			clearInterval(slideInterval.current);
		}
	};

	useEffect(() => {
		startSlideTimer();

		return () => stopSlideTimer();
	});

	return (
		<Box className="carousel">
			<Box
				className="carouselInner"
				style={{ transform: `translateX(${-currentSlide * 100}%)` }}
			>
				{slides.map((slide, index) => (
					<Box className="carouselItem">
						<CarouselItem
							slide={slide}
							key={index}
							stopSlide={stopSlideTimer}
							startSlide={startSlideTimer}
						/>
					</Box>
				))}
			</Box>
			{controls && <CarouselControls prev={prev} next={next} />}
		</Box>
	);
};

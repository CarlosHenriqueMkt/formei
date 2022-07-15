import React from "react";
import slides from "./data";

export const Hero = () => {
	return (
		<div className="container">
			<div className="carousel">
				<div className="carouselInner">
					{slides.map((slide, index) => (
						<div className="carouselItem">
							<img src={slide} alt="" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

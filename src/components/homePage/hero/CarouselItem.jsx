export const CarouselItem = ({ slide, stopSlide, startSlide }) => {
	/* const { title, button, subtitle, image } = slide; */

	return (
		<div
			className="carouselItem"
			onMouseEnter={stopSlide}
			onMouseOut={startSlide}
		>
			<div
				className="carouselItem"
				onMouseEnter={stopSlide}
				onMouseOut={startSlide}
			>
				<img src={slide} alt="" />
			</div>
		</div>
	);
};

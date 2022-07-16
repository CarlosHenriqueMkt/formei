export const CarouselItem = ({ slide, stopSlide, startSlide }) => {
	return (
		<div
			className="carouselItem"
			onMouseEnter={stopSlide}
			onMouseOut={startSlide}
		>
			<img src={slide} alt="" />
		</div>
	);
};

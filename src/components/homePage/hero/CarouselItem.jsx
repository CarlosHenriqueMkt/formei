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

// Another way to create the slider
{
	/* <div className="boxLeft">
<h2 className="boxLeftTitle">{title}</h2>
<button className="boxLeftButton">{button}</button>
<img alt="professonals">{image}</img>
</div> */
}

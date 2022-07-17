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

/* <Box>
	<Box className="boxLeft">
	<Heading as="h2" size="large">
	{title}
	</Heading>
	<Button>{button}</Button>
	</Box>
	<Box className="boxRight">
	<Text>{subtitle}</Text>
	<Image>{image}</Image>
	</Box>
	</Box>	
*/

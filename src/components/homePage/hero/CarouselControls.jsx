import { Box } from "@chakra-ui/react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const CarouselControls = ({ prev, next }) => {
	return (
		<Box>
			<button className="carouselControl left">
				<GrFormPrevious onClick={prev} />
			</button>
			<button className="carouselControl right">
				<GrFormNext onClick={next} />
			</button>
		</Box>
	);
};

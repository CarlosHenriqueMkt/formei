import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./depoiments.css";
import depoimentos from "./data";

export const Depoiments = () => {
	return (
		<>
			<Box className="dpTitle">
				<Heading as="h3" size="lg" id="depoiments">
					Depoimentos
				</Heading>
			</Box>
			<Box className="dpContainer">
				<Swiper
					// install Swiper modules
					modules={[Navigation, Pagination, A11y]}
					spaceBetween={50}
					slidesPerView={1}
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log("slide change")}
				>
					{depoimentos.map((depoiments) => {
						const { name, text, img } = depoiments;

						return (
							<SwiperSlide
								key={depoiments}
								className="depoiments"
							>
								<Text>{text}</Text>
								<Image src={img} alt="Estudante da Formei" />
								<Heading as="h4" size="md">
									{name}
								</Heading>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Box>
		</>
	);
};

import React from "react";
import { Banner } from "../components/courses/bucal/banner/Banner";
import { BulletPoints } from "../components/courses/bucal/bulletPoints/BulletPoints";
import { Description } from "../components/courses/bucal/description/Description";
import CoursesHeader from "../components/courses/coursesHeader/CoursesHeader";

export const Bucal = () => {
	return (
		<>
			<CoursesHeader />
			<Banner />
			<Description />
			<BulletPoints />
		</>
	);
};

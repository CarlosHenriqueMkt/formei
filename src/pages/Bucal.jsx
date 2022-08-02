import React from "react";
import { Banner } from "../components/courses/bucal/banner/Banner";
import { BulletPoints } from "../components/courses/bucal/bulletPoints/BulletPoints";
import { Description } from "../components/courses/bucal/description/Description";

import { Depoiments } from "../components/global/depoiments/Depoiments";
import CoursesHeader from "../components/courses/coursesHeader/CoursesHeader";
import { CoursesFooter } from "../components/courses/coursesFooter/CoursesFooter";
import { Social } from "../components/global/social/Social";

export const Bucal = () => {
	return (
		<>
			<CoursesHeader />
			<Banner />
			<Description />
			<BulletPoints />
			<Depoiments />
			<CoursesFooter />
			<Social />
		</>
	);
};

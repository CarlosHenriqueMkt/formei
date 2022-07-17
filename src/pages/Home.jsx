import { Header } from "../components/global/header/Header";
import { Courses } from "../components/homePage/courseSlider/Courses";
import { Hero } from "../components/homePage/hero/Hero";
import { Reasons } from "../components/homePage/reasons/Reasons";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Reasons />
			<Courses />
		</>
	);
}

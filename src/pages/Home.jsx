import { Depoiments } from "../components/global/depoiments/Depoiments";
import { Footer } from "../components/global/footer/Footer";
import { Header } from "../components/global/header/Header";
import { Form } from "../components/global/newsletter/Form";
import { About } from "../components/homePage/about/About";
import { Courses } from "../components/homePage/courseSlider/Courses";
import { Hero } from "../components/homePage/hero/Hero";

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Courses />
			<About />
			<Depoiments />
			<Footer />
			<Form />
		</>
	);
}

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/Course";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<>
			<ChakraProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="about" element={<About />} />
				</Routes>
			</ChakraProvider>
		</>
	);
}

export default App;

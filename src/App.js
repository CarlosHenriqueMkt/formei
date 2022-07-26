import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { Bucal } from "./pages/Bucal";

function App() {
	return (
		<>
			<ChakraProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/bucal" element={<Bucal />} />
				</Routes>
			</ChakraProvider>
		</>
	);
}

export default App;

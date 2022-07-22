import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<>
			<ChakraProvider>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</ChakraProvider>
		</>
	);
}

export default App;

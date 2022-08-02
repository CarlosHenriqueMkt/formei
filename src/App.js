import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { Bucal } from "./pages/Bucal";
import { Registration } from "./components/registration/Registration";

function App() {
	return (
		<>
			<ChakraProvider>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/bucal" element={<Bucal />} />
					<Route path="/registration" element={<Registration />} />
					{/* 					<Route path="/vet" element={<Vet />} />
					<Route path="/farma" element={<Farma />} />
					<Route path="/creche" element={<Creche />} /> */}
				</Routes>
			</ChakraProvider>
		</>
	);
}

export default App;

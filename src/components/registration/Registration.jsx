import React from "react";
import "./registration.css";
import { RegistrationFooter } from "./RegistrationFooter";
import { RegistrationForm } from "./RegistrationForm";
import { RegistrationHeader } from "./RegistrationHeader";

export const Registration = () => {
	return (
		<>
			<RegistrationHeader />
			<RegistrationForm />
			<RegistrationFooter />
		</>
	);
};

import React, { useState } from "react";
import {
	Box,
	Heading,
	FormControl,
	FormLabel,
	FormHelperText,
	Input,
	Select,
} from "@chakra-ui/react";
import { RegistrationButton } from "./RegistrationButton";

export const RegistrationForm = () => {
	const [input, setInput] = useState({});
	const handleInputChange = (e) => setInput(e.target.value);

	return (
		<Box className="registrationForm">
			<Heading as="h3">Matricule-se!</Heading>
			<FormControl isRequired>
				<FormLabel>Nome completo:</FormLabel>
				<Input
					type="text"
					id="name"
					value={input.name}
					onChange={(e) => handleInputChange(e, "name")}
					placeholder="Camila Gonçalves Dias"
				/>
				<FormLabel>Data de Nascimento:</FormLabel>
				<Input
					type="text"
					id="bday"
					onChange={(e) => handleInputChange(e, "bday")}
					value={input.bday}
					placeholder="00/00/0000"
				/>
				<FormLabel>Endereço:</FormLabel>
				<Input
					type="text"
					id="address"
					value={input.address}
					onChange={(e) => handleInputChange(e, "address")}
					placeholder="Rua Xuliana Jacinto Rola"
				/>
				<FormLabel>CEP:</FormLabel>
				<Input
					type="number"
					id="cep"
					value={input.cep}
					onChange={(e) => handleInputChange(e, "cep")}
					placeholder="00000-000"
				/>
				<FormLabel>RG:</FormLabel>
				<Input
					type="number"
					id="rg"
					value={input.rg}
					onChange={(e) => handleInputChange(e, "rg")}
					placeholder="00000000000"
				/>
				<FormLabel>CPF:</FormLabel>
				<Input
					type="number"
					id="cpf"
					value={input.cpf}
					onChange={(e) => handleInputChange(e, "cpf")}
					placeholder="00000000000"
				/>
				<FormLabel>E-mail:</FormLabel>
				<Input
					type="text"
					id="email"
					value={input.email}
					onChange={(e) => handleInputChange(e, "email")}
					placeholder="seu@email.com"
				/>
				<FormLabel>Nº do Celular:</FormLabel>
				<Input
					type="number"
					id="phone"
					value={input.phone}
					onChange={(e) => handleInputChange(e, "phone")}
					placeholder="(DDD) 00000-0000"
				/>
				<FormLabel>Curso:</FormLabel>
				<Select placeholder="Escolha o seu curso">
					<option value="bucal">Auxiliar de Saúde Bucal</option>
					<option value="vet">Auxiliar de Veterinário</option>
					<option value="farma">Auxiliar de Farmacêutico</option>
					<option value="creche">
						Auxiliar de Creche e Berçário
					</option>
				</Select>
				<FormHelperText
					fontSize="sm"
					marginTop="20px"
					textAlign="center"
				>
					Nunca iremos compartilhar os seus dados sem a sua permissão.
				</FormHelperText>
			</FormControl>
			<RegistrationButton />
		</Box>
	);
};

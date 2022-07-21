import { Box, Image, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../../utils/assets/media/Logos/logo-nobg.png";
import "./header.css";
import { HamburgerIcon } from "@chakra-ui/icons";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuClassName = isOpen ? "openMenu" : "closedMenu";
	const handleClickMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleCloseMenu = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Box className="topHeader">
				<h1>Cursos profissionalizantes em Nova Iguaçu</h1>
			</Box>
			<Box className="header">
				<Box className="logo">
					<Image
						src={logo}
						alt="Logo Formei Qualificação Profissional"
					></Image>
				</Box>

				<Box className={menuClassName}>
					<Link
						className="menuItem"
						href="#hero"
						onClick={handleCloseMenu}
					>
						Início
					</Link>
					<Link
						className="menuItem"
						href="#reasons"
						onClick={handleCloseMenu}
					>
						Diferencial
					</Link>
					<Link
						className="menuItem"
						href="#courses"
						onClick={handleCloseMenu}
					>
						Cursos
					</Link>
					<Link
						className="menuItem"
						href="#about"
						onClick={handleCloseMenu}
					>
						Sobre Nós
					</Link>
					<Link
						className="menuItem"
						href="#about"
						onClick={handleCloseMenu}
					>
						Depoimentos
					</Link>
					<Link
						className="menuItem"
						href="#contact"
						onClick={handleCloseMenu}
					>
						Contato
					</Link>
				</Box>

				<Box className="icon">
					<HamburgerIcon onClick={handleClickMenu} />
				</Box>
			</Box>
		</>
	);
};

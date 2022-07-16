import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
						to="#Hero"
						onClick={handleCloseMenu}
					>
						Início
					</Link>
					<Link
						className="menuItem"
						to="#MotivationOne"
						onClick={handleCloseMenu}
					>
						Diferencial
					</Link>
					<Link
						className="menuItem"
						to="#CourseSlider"
						onClick={handleCloseMenu}
					>
						Cursos
					</Link>
					<Link
						className="menuItem"
						to="#About"
						onClick={handleCloseMenu}
					>
						Sobre Nós
					</Link>
					<Link
						className="menuItem"
						to="#Depoiments"
						onClick={handleCloseMenu}
					>
						Depoimentos
					</Link>
					<Link
						className="menuItem"
						to="#Blog"
						onClick={handleCloseMenu}
					>
						Blog
					</Link>
				</Box>

				<Box className="icon">
					<HamburgerIcon onClick={handleClickMenu} />
				</Box>
			</Box>
		</>
	);
};

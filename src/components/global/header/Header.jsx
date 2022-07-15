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

	return (
		<>
			<Box className="header">
				<Box className="logo">
					<Image
						src={logo}
						alt="Logo Formei Qualificação Profissional"
					></Image>
				</Box>

				<Box className={menuClassName}>
					<Link className="menuItem" to="#Hero">
						Início
					</Link>
					<Link className="menuItem" to="#MotivationOne">
						Diferencial
					</Link>
					<Link className="menuItem" to="#CourseSlider">
						Cursos
					</Link>
					<Link className="menuItem" to="#About">
						Sobre Nós
					</Link>
					<Link className="menuItem" to="#Depoiments">
						Depoimentos
					</Link>
					<Link className="menuItem" to="#Blog">
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

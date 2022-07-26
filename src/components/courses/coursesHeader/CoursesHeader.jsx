import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../../utils/assets/media/Logos/logo-nobg.png";
import "./coursesheader.css";

export default function CoursesHeader() {
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
			<div className="topHeader">
				<h1>Cursos profissionalizantes em Nova Iguaçu</h1>
			</div>
			<div className="header">
				<div className="logo">
					<img
						src={logo}
						alt="Logo Formei Qualificação Profissional"
					></img>
				</div>

				<div className={menuClassName}>
					<Link className="menuItem" to="/" onClick={handleCloseMenu}>
						Página inicial
					</Link>
					<a
						className="menuItem"
						href="#description"
						onClick={handleCloseMenu}
					>
						{" "}
						Descrição
					</a>
					<a
						className="menuItem"
						href="#professional"
						onClick={handleCloseMenu}
					>
						Perfil Profissional
					</a>
					<a
						className="menuItem"
						href="#depoiments"
						onClick={handleCloseMenu}
					>
						Depoimentos
					</a>
				</div>

				<div className="icon">
					<HamburgerIcon onClick={handleClickMenu} />
				</div>
			</div>
		</>
	);
}

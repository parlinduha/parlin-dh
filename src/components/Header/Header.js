import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import HomeRoundedIcon from "@mui/icons-material/Home";
import TelegramIcon from "@mui/icons-material/Telegram";
import { NavLink } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomeButton from "../Button/Button";
import "./header.css";

const Header = ({ props }) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header ">
        <Navbar.Brand className="header_home">
          <HomeRoundedIcon />
        </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link}>
              {resumeData.socials[key].icon}
            </a>
          ))}
          <a href={resumeData.emailLink} target="blank" className="resume-btn"><span className="btn_text">Hire Me</span><TelegramIcon /></a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

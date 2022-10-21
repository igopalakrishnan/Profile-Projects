import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import Banner from "./Banner";
import Project from "./Project";
import ReactJS from "./ReactJS";
import ReactNative from "./ReactNative";

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="https://igopalakrishnan.github.io/Profile/" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Home')}>Home</Nav.Link>
                            <Nav.Link href="#Project" className={activeLink === 'Project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Project')}>All Project</Nav.Link>
                            <Nav.Link href="#React JS" className={activeLink === 'React JS' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('React JS')}>React JS</Nav.Link>
                            <Nav.Link href="#React Native" className={activeLink === 'React Native' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('React Native')}>React Native</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Banner />
            <Project />
            <ReactJS />
            <ReactNative />
        </>
    )
}

export default NavBar
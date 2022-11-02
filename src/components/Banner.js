import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from "react-bootstrap-icons";

const Banner = () => {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Projects</span>
                                    <h4>Tools/Technologies:</h4>
                                    <p>HTML5/CSS3, Bootstrap, React JS, Node JS, Express, MongoDB, React Native, Sketch, Google Cloud Platform, Firebase, Context API, Sanity.io.....,,</p>
                                    <button>
                                        <a style={{
                                            textDecoration: "none",
                                            color: "#fff"
                                        }} href={"https://projects-media.netlify.app/"}  target="_blank">Media
                                            <ArrowRightCircle size={27} />
                                        </a>
                                    </button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
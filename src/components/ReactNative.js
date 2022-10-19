import { useRef, useState } from "react";
import { Container, Row, Col, Carousel, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import reactnativeImg1 from '../assets/img/project3-img1.png';
import reactnativeImg2 from '../assets/img/project3-img2.png';
import reactnativeImg3 from '../assets/img/project3-img3.png';
import reactnativeImg4 from '../assets/img/project3-img4.png';

const Contact = () => {

    return (
        <section className="project" id="React Native">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">React Native</Nav.Link>
                                </Nav.Item>
                            </Nav>
                                    <p></p>
                                    <Carousel>
                                    <Carousel.Item>
                                    <Row>
                                        <Col size={12} sm={6} md={4}>
                                            <div className="proj-imgbx">
                                                <img
                                                    src={reactnativeImg1}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>Deliveroo Clone</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>Delivering food at Door-step.
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Link</span>: <a href="https://igopalakrishnan.github.io/pages/deliveroo.html"
                                                        target="_blank">Deliveroo-clone</a></li>
                                                    <li><span>Category</span>: Food Delivering</li>
                                                    <li><span>Role</span>: Full Stack Engineer</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                        
                                <Carousel.Item>
                                    <Row>
                                        <Col size={12} sm={6} md={4}>
                                            <div className="proj-imgbx">
                                                <img
                                                    src={reactnativeImg2}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>Insta Clone</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>
                                                Photo based social media platform.
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Link</span>: <a href="https://igopalakrishnan.github.io/pages/insta-clone.html"
                                                        target="_blank">Insta-clone</a></li>
                                                    <li><span>Category</span>: Social Media</li>
                                                    <li><span>Role</span>: Full Stack Engineer</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                        
                                <Carousel.Item>
                                    <Row>
                                        <Col size={12} sm={6} md={4}>
                                            <div className="proj-imgbx">
                                                <img
                                                    src={reactnativeImg3}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>Inshort Clone</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>
                                                NEWS feed app from source.
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Link</span>: <a href="https://igopalakrishnan.github.io/pages/inshort.html"
                                                        target="_blank">Inshort-clone</a></li>
                                                    <li><span>Category</span>: NEWS</li>
                                                    <li><span>Role</span>: Full Stack Engineer</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Row>
                                        <Col size={12} sm={6} md={4}>
                                            <div className="proj-imgbx">
                                                <img
                                                    src={reactnativeImg4}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>Signal Clone</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>
                                                Chatting with another users.
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Link</span>: <a href="https://igopalakrishnan.github.io/pages/signal-clone.html"
                                                        target="_blank">Signal-clone</a></li>
                                                    <li><span>Category</span>: Chatting</li>
                                                    <li><span>Role</span>: Full Stack Engineer</li>
                                                </ul>
                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                                    </Carousel>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
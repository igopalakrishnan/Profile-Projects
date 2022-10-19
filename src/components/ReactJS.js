import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import reactjsImg1 from '../assets/img/project2-img1.png';
import reactjsImg2 from '../assets/img/project2-img2.png';
import reactjsImg3 from '../assets/img/project2-img3.png';
import reactjsImg4 from '../assets/img/project2-img4.png';
import reactjsImg5 from '../assets/img/project2-img5.png';

const Projects = () => {


    return (
        <section className="project" id="React JS">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>

                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">React JS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <p></p>
                            <Carousel>
                                <Carousel.Item>
                                    <Row>
                                        <Col size={12} sm={6} md={4}>
                                            <div className="proj-imgbx">
                                                <img
                                                    src={reactjsImg1}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>Portfolio</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>
                                                Building Portfoilo
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Link</span>: <a href="https://igopalakrishnan.github.io/Profile/"
                                                        target="_blank">Portfoilo</a></li>
                                                    <li><span>Category</span>: Portfolio</li>
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
                                                    src={reactjsImg2}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>Instagram Clone</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>
                                                Photo-based social media platform
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Link</span>: <a href="https://insta-clone-web.herokuapp.com/"
                                                        target="_blank">Instagram-clone</a></li>
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
                                                    src={reactjsImg3}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>Chat App</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>
                                                Chating App for real time communication.
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Link</span>: <a href="https://mern-lets-talk.herokuapp.com/"
                                                        target="_blank">Chat-App</a></li>
                                                    <li><span>Category</span>: Chatting</li>
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
                                                    src={reactjsImg4}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>Book Keeping App</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>
                                                    Book App for keeping the books.
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Link</span>: <a href="https://mern-bookapp.herokuapp.com/"
                                                        target="_blank">Book-App</a></li>
                                                    <li><span>Category</span>: Storing</li>
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
                                                    src={reactjsImg5}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>E-commerce</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>
                                                The one-stop destination for all your shopping needs.
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Link</span>: <a href="https://ecommerce-flipkart.herokuapp.com/"
                                                        target="_blank">Flipkart-clone</a></li>
                                                    <li><span>Category</span>: E-commerce</li>
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
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

export default Projects
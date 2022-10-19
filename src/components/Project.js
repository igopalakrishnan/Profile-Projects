import projImg1 from "../assets/img/project1-img1.png";
import projImg2 from "../assets/img/project1-img2.png";
import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Nav, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

const Skills = () => {

    return (
        <section className="project" id="Project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>

                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Project</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <p></p>
                            <Carousel>
                                <Carousel.Item>
                                    <Row>
                                        <Col size={12} sm={6} md={4}>
                                            <div className="proj-imgbx">
                                                <img
                                                    src={projImg1}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>Client's Portal</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>
                                                Manage Client's developers subscription.
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Category</span>:  Fintech</li>
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
                                                    src={projImg2}
                                                    alt="First slide"
                                                />
                                                <div className="proj-txtx">
                                                    <h4>Course Tracker</h4>
                                                </div>
                                            </div>


                                        </Col>
                                        <Col>
                                            <div className="portfolio_right_text">
                                                <h4 class="text-uppercase">Project Information</h4>
                                                <p>
                                                Learning Courses to your needs.
                                                </p>
                                                <ul class="list">
                                                    <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                        class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                            class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                    <li><span>Category</span>: Courses</li>
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

export default Skills
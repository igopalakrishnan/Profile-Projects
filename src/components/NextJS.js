import { Container, Row, Col, Carousel, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Spotify from "../assets/img/spotify.png";

const NextJS = () => {
    const reactnative = [
        {
            title: "Spotify 2.0",
            imgUrl: Spotify,
            linkName:"************",
            shortDesc: "Play Your Favourite Songs.",
            category: "Discography"
        },
    ];

    return (
        <section className="project" id="Next JS">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Next JS</Nav.Link>
                                </Nav.Item>
                            </Nav>
                                    <p></p>
                                    <Carousel>
                                {
                                    reactnative.map((project, index) =>
                                        <Carousel.Item>
                                            <Row>
                                                <>
                                                    <Col size={12} sm={6} md={4} key={index}>
                                                        <div className="proj-imgbx">
                                                            <img
                                                                src={project.imgUrl}
                                                                alt="First slide"
                                                            />
                                                            <div className="proj-txtx">
                                                                <h4>{project.title}</h4>
                                                            </div>
                                                        </div>

                                                    </Col>
                                                    <Col>
                                                        <div className="portfolio_right_text">
                                                            <h4 class="text-uppercase">Project Information</h4>
                                                            <p>
                                                                {project.shortDesc}
                                                            </p>
                                                            <ul class="list">
                                                                <li><span>Tech Stack</span>: <i class="fa fa-star pr-3"></i><i
                                                                    class="fa fa-star pr-1"></i><i class="fa fa-star pr-1"></i><i
                                                                        class="fa fa-star pr-1"></i><i class="fa fa-star"></i></li>
                                                                         <li><span>Link</span>: <a href={project.link}
                                                                    target="_blank">{project.linkName}</a></li>
                                                                <li><span>Category</span>:  {project.category}</li>
                                                                <li><span>Role</span>: Full Stack Engineer</li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </>
                                            </Row>
                                        </Carousel.Item>

                                    )
                                }
                            </Carousel>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NextJS
import { Container, Row, Col, Carousel, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Deliveroo from "../assets/img/deliveroo.png";
import Education from "../assets/img/education.png";
import Instaclone from "../assets/img/Insta-clone.png";
import News from "../assets/img/news.png";
import Signal from "../assets/img/signal.png";

const Contact = () => {
    const reactnative = [
        {
            title: "Course Tracker",
            imgUrl: Education,
            linkName:"************",
            shortDesc: "Learning Online",
            category: "Education"
        },
        
        {
            title: "Deliveroo Clone",
            imgUrl: Deliveroo,
            linkName: "Deliveroo",
            link: "https://igopalakrishnan.github.io/pages/deliveroo.html",
            shortDesc: "Safe food delivery at Doorstep.",
            category: "Food Delivery"
        },
        {
            title: "Insta Clone",
            imgUrl: Instaclone,
            linkName: "Insta-clone",
            link: "https://igopalakrishnan.github.io/pages/insta-clone.html",
            shortDesc: "Photo-based social media Platform.",
            category: "Social Media"
        },
        {
            title: "Inshort Clone",
            imgUrl: News,
            linkName: "Inshort-clone",
            link: "https://igopalakrishnan.github.io/pages/inshort.html",
            shortDesc: "Newspaper in mobile on your hand.",
            category: "NEWS"
        },
        {
            title: "Signal Clone",
            imgUrl: Signal,
            linkName: "Signal-clone",
            link: "https://igopalakrishnan.github.io/pages/signal-clone.html",
            shortDesc: "Chat with your friends.",
            category: "Messaging"
        },
    ];

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

export default Contact
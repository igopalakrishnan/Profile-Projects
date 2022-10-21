import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Bookkeeping from "../assets/img/book-keeping.png";
import ChatApp from "../assets/img/chatApp.png";
import Client from "../assets/img/client.png";
import Ecommerce from "../assets/img/e-commerce.png";
import Instagram from "../assets/img/Instagram.png";
import Portfolio from "../assets/img/portfolio.png";

const Projects = () => {
    const reactjs = [
        {
            title: "Client Portal",
            imgUrl: Client,
            linkName: "************",
            shortDesc: "Manage Client's developers subscription.",
            category: "Fintech"
        },
        {
            title: "Portfolio",
            imgUrl: Portfolio,
            linkName: "Portfolio",
            link: "https://igopalakrishnan.github.io/Profile/",
            shortDesc: "Personel Profile",
            category: "Profile"
        },
        {
            title: "Instagram Clone",
            imgUrl: Instagram,
            linkName: "Instagram-web",
            link: "https://insta-clone-web.herokuapp.com/",
            shortDesc: "Photo-based social media Platform",
            category: "Social Media"
        },
        {
            title: "Chat App",
            imgUrl: ChatApp,
            linkName: "ChatApp",
            link: "https://mern-lets-talk.herokuapp.com/",
            shortDesc: "Chat and group chat with friends",
            category: "Chatting"
        },
        {
            title: "Book Keeping App",
            imgUrl: Bookkeeping,
            linkName: "Book Keeping",
            link: "https://mern-bookapp.herokuapp.com/",
            shortDesc: "Keeping book in store.",
            category: "Storing"
        },
        {
            title: "E-commerce",
            imgUrl: Ecommerce,
            linkName: "E-commerce",
            link: "https://ecommerce-flipkart.herokuapp.com/",
            shortDesc: "Selling of products on online.",
            category: "Shoping"
        },
        
    ];


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
                                {
                                    reactjs.map((project, index) =>
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
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}

export default Projects
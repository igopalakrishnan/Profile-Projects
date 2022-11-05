import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Nav, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import Bookkeeping from "../assets/img/book-keeping.png";
import ChatApp from "../assets/img/chatApp.png";
import Client from "../assets/img/client.png";
import Deliveroo from "../assets/img/deliveroo.png";
import Ecommerce from "../assets/img/e-commerce.png";
import Education from "../assets/img/education.png";
import Instaclone from "../assets/img/Insta-clone.png";
import Instagram from "../assets/img/Instagram.png";
import News from "../assets/img/news.png";
import Portfolio from "../assets/img/portfolio.png";
import Signal from "../assets/img/signal.png";
import Spotify from "../assets/img/spotify.png";
import Movie from "../assets/img/movie.png";

const Skills = () => {

    const projects = [
        {
            title: "Client Portal",
            imgUrl: Client,
            linkName: "************",
            shortDesc: "Manage Client's developers subscription.",
            category: "Fintech"
        },
        {
            title: "Course Tracker",
            imgUrl: Education,
            linkName: "**************",
            shortDesc: "Learning Online",
            category: "Education"
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
        {
            title: "Spotify 2.0",
            imgUrl: Spotify,
            linkName: "Spotify 2.0",
            link:"https://spotifyy-2.netlify.app/",
            shortDesc: "Play Your Favourite Songs.",
            category: "Discography"
        },
        {
            title: "Disney Clone",
            imgUrl: Movie,
            linkName: "Disney Clone",
            link:"https://disney-clone-8ad44.web.app/",
            shortDesc: "Watch Your Favourite Movies.",
            category: "Filmography"
        },
    ];

    return (
        <section className="project" id="Project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>

                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">All Project</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <p></p>
                            <Carousel>
                                {
                                    projects.map((project, index) =>
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

export default Skills
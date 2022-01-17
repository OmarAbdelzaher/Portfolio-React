import React  from "react";
import { Navbar,Nav,Container,Row,Col} from "react-bootstrap";
import "./NavBar.css";
import "../App.css";
import logo from '../logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
// import Hero from "../HeroSection/HeroSection";
// import About from "../About/about";
// import Skills from "../Skills/skills";
// import Portfolio from "../Portfolio/portfolio";
// import Footer from "../Footer/footer";

class NavBar extends React.Component {
    constructor(){
        super();
    }

    render(){
       return (
        <>
        {/* <Router> */}
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg" className="nav">
                <Container>
                    <Row>
                        <Nav className="me-auto">
                            <img src={logo} className="App-logo" alt="logo" />
                            {/* <Col lg={12}><Nav.Link as={Link} to="/">Home</Nav.Link></Col>
                            <Col lg={6}><Nav.Link as={Link} to="/about">About Me</Nav.Link></Col>
                            <Col lg={6}><Nav.Link as={Link} to="/skills">Skills</Nav.Link></Col>
                            <Col lg={6}><Nav.Link as={Link} to="/portfolio" >Portfolio</Nav.Link></Col>
                            <Col lg={6}><Nav.Link as={Link} to="/contact">Contact</Nav.Link></Col> */}
                            <Col lg={12}><Nav.Link>Home</Nav.Link></Col>
                            <Col lg={6}><Nav.Link>About Me</Nav.Link></Col>
                            <Col lg={6}><Nav.Link>Skills</Nav.Link></Col>
                            <Col lg={6}><Nav.Link>Portfolio</Nav.Link></Col>
                            <Col lg={6}><Nav.Link>Contact</Nav.Link></Col>
                        </Nav>
                    </Row>
                </Container>
            </Navbar>
            {/* <div>
            <Routes>
                <Route path="/">
                    <Hero />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/contact">
                    <Footer />
                </Route>
                </Routes>
            </div> */}
        {/* </Router> */}
        
        </>
       );
    }
}

export default NavBar;
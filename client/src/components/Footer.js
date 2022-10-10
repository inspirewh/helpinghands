import { Col, Container, Row } from "react-bootstrap"
import logo from '../assets/img/helpinghands-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Col>
                    <Row className="align-item-center">
                        <Col sm={6}>
                            <img src={logo} alt="Logo" />
                        </Col>
                        <Col sm={6} className="text-center text-sm-end">
                            <div className="social-icon">
                                <a href="www.facebook.com"><img src={navIcon1} alt="nav icon"></img></a>
                                <a href="www.facebook.com"><img src={navIcon2} alt="nav icon"></img></a>
                            </div>
                            <p>CopyRight 2022. All Rights Reserved</p>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </footer>
    )
}
import {useState, useEffect} from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import mobiledisplay from "../assets/img/mobile-Edited.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Helping you help others"]
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => {clearInterval(ticker)};
    }, [text])


//define the "tick" function
const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta(prevDelta => prevDelta /2)
    }
//check if finished typing the words
    if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }
}


    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col>
                    <div className="header-bx">
                        <h1>{``} <span className="wrap"> {text}</span> </h1>
                    </div>
                    <div className="header-bx">
                        <Link to="/contact">
                            <button className="main-btn" >Start Donating <ArrowRightCircle size={25} /></button>
                        </Link>
                     </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
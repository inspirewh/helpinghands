import { useState }from "react";
import { Col, Container, Row } from "react-bootstrap";

export const LoginForm = () => {
    //the initial default state
    const formInitialDetails = {
        email: '',
        password: '',
    }
    //A state that stores the inputdetails
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    //submit button (default = send when user preses send "change text to "sending"  )
    const [buttontext] = useState('Send')
    const [status] = useState({});
    //updates the form details state so it leaves the rest form details intact and only updated the field indicated 
    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
    
    return (
        <section className="login" id="connect">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>
                        <h2>Login</h2>
                        <p>Simply login below to donating new or pre-loved items to those in need.</p>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder= "Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.password} placeholder= "Password" onChange={(e) => onFormUpdate('password', e.target.value)} />
                                </Col>
                                <Col>
                                    <p className="hyperlink-txt">Dont' have an account? <a href="/signup">Click here to signup.</a></p>    
                                    <button type="submit"><span>{buttontext}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}
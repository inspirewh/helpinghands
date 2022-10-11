import { useState }from "react";
import { Col, Container, Row } from "react-bootstrap";

export const SignupForm = () => {
    //the initial default state
    const formInitialDetails = {
        fullName: '',
        userName: '',
        email: '',
        password: '',
        message: '',
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
        <section className="signup" id="connect">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>
                        <h2>Start Donating</h2>
                        <p>Simply register below to create your profile and you can start donating new or pre-loved items to those in need.</p>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.fullName} placeholder= "Full Name" onChange={(e) => onFormUpdate('fullName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.userName} placeholder= "User Name" onChange={(e) => onFormUpdate('userName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder= "Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.password} placeholder= "Password" onChange={(e) => onFormUpdate('password', e.target.value)} />
                                </Col>
                                <Col>
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
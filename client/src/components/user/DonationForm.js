import { useState }from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Donate = () => {
    //the initial default state
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
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
        <section className="donationForm" id="donate">
            <Container>
                <Row className="justify-content-center align-items-center" id= "inputForm">
                    <Col className="inputForm" md={6}>
                        <h2>Let's Get Donating</h2>
                        <p>Want to know more about Helping Hands. Or want to get involved more and support those in need? Get in touch by completing the form below and we'll be in touch.</p>
                        <form>
                            <Row>
                                <Col>
                                <input id="imageUpload" type= 'file' value={formDetails.imgupload} placeholder= "Add photos of your donation" onChange={(e) => onFormUpdate('imgUpload', e.target.value)}></input>
                                </Col>
                            </Row>
                            <Row> 
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.title} placeholder= "Title" onChange={(e) => onFormUpdate('title', e.target.value)} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <textarea row="6" value={formDetails.message} placeholder= "Description" onChange={(e) => onFormUpdate('description', e.target.value)}/>
                                    <button type="submit"><span>{buttontext}</span></button>
                                </Col>
                            </Row>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}
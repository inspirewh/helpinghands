import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { validateEmail } from '../../utils/validateEmail';
// import BaseLayout from "../layouts/BaseLayout";
import { Col, Container, Row } from "react-bootstrap";

export const UserChat = () => {
    const navigate = useNavigate();
    const form = useRef();
    const [email, setEmail] = useState('');

    const sendEmail = (e) => {
      e.preventDefault();

      // 
      const isEmailValid = validateEmail(email);

      if(!isEmailValid){
        return alert("incorrect email, please try again!");
      }
      
      emailjs.sendForm('service_z4w7u7f', 'template_gio5517', form.current, '9OsoxDn8wiD5lJeLU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        navigate("/dashboard");

        
    };
    
    return (
        <section className="userContact" id="connect">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6} className="inputForm2">
                        <h2 className="mt-2">Get in touch</h2>
                        <p>Want to know more about Helping Hands. Or want to get involved more and support those in need? Get in touch by completing the form below and we'll be in touch.</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="user_name" placeholder= "First Name" required={true} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder= "Last Name" required= {true} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="user_email" placeholder= "Email Address" required= {true} onInput={(e) => setEmail(e.target.value)} value={email} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" placeholder= "Phone" required= {true} />
                                </Col>
                                <Col>
                                    <textarea row="6" name="user_message" placeholder= "Message" required= {true} />
                                    <button to='/dashboard' type="submit" id="submitButton" value="Send" placeholder='Enter Your Message Here' required= {true} >Send</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}
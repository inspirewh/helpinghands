import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth'
import '../App.css';
import { useMutation } from '@apollo/client';

export const SignupForm = () => {
    //the initial default state
    const formInitialValues = {
        username: '',
        email: '',
        password: '',
    };
    //A state that stores the inputdetails
    const [formValues, setFormValues] = useState(formInitialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [addUser, { error }] = useMutation(ADD_USER);
    //updates the form details state so it leaves the rest form details intact and only updated the field indicated 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]:value });
        console.log(formValues)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        try {
            const { data } = await addUser({
                variables: { ...formValues }
            });

            Auth.login(data.createUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() =>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
    },[formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/
        if (!values.username) {
            errors.username = "Username is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 8 characters";
        }
        
        return errors;
    };
    
    return (
        <section className="signup" id="connect">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>
                        <h2>Start Donating</h2>
                        <p>Simply register below to create your profile and you can start donating new or pre-loved items to those in need.</p>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="text" 
                                    name="username"
                                    placeholder= "User Name" 
                                    value={formValues.username} 
                                    onChange={handleChange} />
                                    <p className="validate-text">{ formErrors.username }</p>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="email" 
                                    name="email"
                                    placeholder= "Email Address"
                                    value={formValues.email} 
                                    onChange={handleChange} />
                                    <p className="validate-text">{ formErrors.email }</p>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="text"
                                    name="password"
                                    placeholder= "Password"
                                    value={formValues.password} 
                                    onChange={handleChange} />
                                    <p className="validate-text">{ formErrors.password }</p>
                                </Col>
                                <Col>
                                    <p className="hyperlink-txt">Already have an account? <a href="/login">Click here to login.</a>
                                    </p>
                                    <button type="submit">Submit</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}
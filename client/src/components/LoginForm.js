import { useState }from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

export const LoginForm = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [loginUser, { error }] = useMutation(LOGIN_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await loginUser({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    
    return (
        <section className="login" id="connect">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>
                        <h2>Login</h2>
                        <p>Simply login below to donating new or pre-loved items to those in need.</p>
                        <form onSubmit={handleFormSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input 
                                    placeholder= "Email Address"
                                    name="email"
                                    type="email"
                                    id="email"
                                    onChange={handleChange} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    id="pwd"
                                    onChange={handleChange} />
                                </Col>
                                <Col>
                                    <p className="hyperlink-txt">Dont' have an account? <a href="/signup">Click here to signup.</a></p>    
                                    <button type="submit"></button>
                                </Col>
                                {error ? (
                                    <div>
                                        <p className="error-text">The provided credentials are incorrect</p>
                                    </div>
                                    ) : null}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}
import { useState }from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { useMutation } from '@apollo/client';
import { ADD_DONATION } from '../../utils/mutations';
import auth from '../../utils/auth';
export const Donate = ({ profileId }) => {
    const [donation, setDonation] = useState('');
    const [addDonation, { error }] = useMutation(ADD_DONATION);
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const data = await addDonation({
          variables: { profileId, donation },
        });
        setDonation('');
      } catch (err) {
        console.error(err);
      }
    };
    return (
        <section className="donationForm" id="donate">
            <Container>
                <Row className="justify-content-center align-items-center" id= "inputForm">
                    <Col className="inputForm" md={6}>
                        <h2>Let's Get Donating</h2>
                        <p>Want to know more about Helping Hands. Or want to get involved more and support those in need? Get in touch by completing the form below and we'll be in touch.</p>
                        {auth.loggedIn() ? (
                        <form onSubmit={handleFormSubmit} >
                            <Row>
                                <Col>
                                <input 
                                placeholder= "Add photos of your donation"
                                type= 'file'
                                name="itemImage"
                                value={donation.itemImage}                                 
                                onChange={(event) => setDonation(event.target.value)}></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} className="px-1">
                                <input 
                                placeholder= "Title" 
                                type= 'text'
                                name="itemTitle"
                                value={donation.itemTitle}                                 
                                onChange={(event) => setDonation(event.target.value)}></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <input 
                                placeholder= "Description" 
                                type= 'text'
                                name="itemDescription"
                                value={donation.itemDescription}                                 
                                onChange={(event) => setDonation(event.target.value)}></input>
                                <button type="submit"></button>
                                {error && (
                                    <div className="col-12 my-3 bg-danger text-white p-3">
                                    {error.message}
                                    </div>
                                 )}
                                </Col>
                            </Row>
                            {error && (
                            <div className="col-12 my-3 bg-danger text-white p-3">
                            {error.message}
                            </div>
                        )}
                        </form>
                        ) : (
                        <p>
                        You need to be logged in to donate Please{' '}
                        <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                        </p>
                        )}
                    </Col>
                </Row>
            </Container>

        </section>

    );
};

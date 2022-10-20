import { useState }from "react";
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
        {auth.loggedIn() ? (
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
                        </form>
                    </Col>
                </Row>
            </Container>
                ) : (
                    <p>
                    You need to be logged in to donate. Please{' '}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                    </p>
                )}
                </div>
            );
            };
        </section>

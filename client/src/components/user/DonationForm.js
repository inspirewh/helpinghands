import { useState }from "react";
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { useMutation } from '@apollo/client';
import { ADD_DONATION } from '../../utils/mutations';
import auth from '../../utils/auth';
export const Donate = ({ profileId }) => {
    const [itemImageUrl, setItemImageUrl] = useState('');  // TODO: fix, donation should be an object, not a string
    const [itemDescription, setitemDescription] = useState('');
    const [itemName, setitemName] = useState('');
    const [addDonation, { error }] = useMutation(ADD_DONATION);
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const data = await addDonation({
          variables: { 
            // TODO: create a state for each input field
            item_description: itemDescription,
            item_imageUrl: itemImageUrl,
            item_name: itemName, 
            item_quantity: itemQuantity,
        },
        });
        setItemImageUrl('');
        setitemDescription('');
        setitemName('');
        setitemQuantity('');
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
                                type= 'url'
                                name="itemImageUrl"
                                value={itemImageUrl}                                 
                                onChange={(event) => setItemImageUrl(event.target.value)}></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <input 
                                placeholder= "Enter the quantity"
                                type= 'text'
                                name="itemQuantity"
                                value={itemQuantity}                                 
                                onChange={(event) => setitemQuantity(event.target.value)}></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} className="px-1">
                                <input 
                                placeholder= "Title" 
                                type= 'text'
                                name="itemName"
                                value={itemName}                                 
                                onChange={(event) => setitemName(event.target.value)}></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <input 
                                placeholder= "Description" 
                                type= 'text'
                                name="itemDescription"
                                value={itemDescription}                                 
                                onChange={(event) => setitemDescription(event.target.value)}></input>
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

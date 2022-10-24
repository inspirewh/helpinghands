import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link, useNavigate,} from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';


// creating to sliding carousel display donation of job history
export const UserDashboard = () => {

  // const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data,error } = useQuery(
    QUERY_ME
  );

  const profile = data?.me || [];
  
  // console.log('please be it', profile);
  // console.log(userDonations.item_description);
  
  const userDonations = profile.donations;
  console.log(userDonations);

  const Navigate = useNavigate();
  
  if(error){
    Navigate('/')
    console.log(error);
  }

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  // TODO: move to login
  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  // if (auth.loggedIn() && auth.getProfile().data._id === profileId) {
  //   return <Navigate to="/dashboard" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.username) {
    return (
      <h4>
        Oops! You need to be logged in to see this page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  // if (userDonations === undefined) {
  //   console.log("you havent made any donations yet");
  // }


    const responsive = {
        superLargeDesktop: {

          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1500 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1500, min: 1010 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 1010, min: 0 },
          items: 1
        }
      };

return (
      <section className="dashboard" id="dashboard">
        <Container>
            <Row>
                <Col>
                <div className="dashboard-bx">
                    <h2>
                    {profile.username}, thank you for being a helping hand!  
                    </h2>
                    <p>Your contributions to the community will go a long way to lending a helping hand to people and families less fortunate.
                      <br></br>From all of us here at Helping Hands we would like to thank you for joining the millions of kind people willing to help others out and lend a hand to those in need.
                      <br></br>Here, on your dashboard you can track your donations with updated information or <a href="/connect" className="hyperlink">Get In Touch</a> with us.
                    </p>
                    <h4>
                      
                    </h4>
                    <h4>
                    Your recent donations: 
                    </h4>
                    
                  </div>
                </Col>
            </Row>
          </Container>
          <Container>
                <Carousel responsive={responsive} infinite={true} className="dashboard-slide">
                  {userDonations.map((donation) => (
                    <div className="item" key={donation._id}>
                    <Card style={{ width: '25rem' }}>
                      <Card.Img variant="top" style={{height:'25rem', width: '100%', objectFit:'cover'}} src={donation.item_imageUrl}/>
                      <Card.Body style={{ height: '11rem'}}>
                        <Card.Title>{donation.item_name}</Card.Title>
                        <Card.Text>
                          {donation.username}
                        </Card.Text>
                        <Card.Text>
                          {donation.item_description}
                        </Card.Text>
                        <Card.Text>
                          Quantity: {donation.item_quantity}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    </div>


                  ))}
                </Carousel>
        </Container>
      </section>
  )
}
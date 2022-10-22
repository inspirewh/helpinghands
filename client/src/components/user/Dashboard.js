import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png"

import { useNavigate,} from 'react-router-dom';
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
  // console.log(userDonations);

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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare congue pharetra. Curabitur non leo ut quam tincidunt maximus. Etiam id diam at velit ornare vehicula eu nec augue. Nunc id faucibus sem, ac mollis nulla. Sed luctus viverra pulvinar.</p>
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
                      <Card.Img variant="top" src={donation.item_imageUrl}/>
                      <Card.Body>
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
        <img alt="blah blah" className="background-image-left" src={colorSharp} />
      </section>
  )
}
import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"

import { useQuery } from '@apollo/client'; //
import { ALL_USERS } from '../utils/queries'; 

// creating to sliding carousel display donation of job history
export const DonationFeed = () => {
    const responsive = {
        superLargeDesktop: {

          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const { data } = useQuery(ALL_USERS) //
    const users = data?.users || []; //
    const donations = users.flatMap(user => {
      return user.donations.map((don) => {
        return {
          ...don,
          username: user.username,
        }
      })
    })

return (
      <section className="donation" id="donation">
        <Container>
            <Row>
                <Col>
                <div className="donation-bx">
                    <h2>
                      Live Donation Feed  
                    </h2>
                    <p>Here is our most current donations from our helping hands, we're putting your charity at the heart of the proud helping hands experience and making it even easier for kind-hearted people like you to donate to those in need.</p>
                    <div className="donation-imgbx">  
                        <div className="donation-txtx">
                            <h4>Web Development</h4>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                    </div>
                  </div>
                </Col>
            </Row>
          </Container>
          <Container>
                <Carousel responsive={responsive} infinite={true} className="donation-slide">
                  {donations.map((donation) => (
                    <div className="item" key={donation._id}>
                    <Card style={{ width: '100%'}}>
                      <Card.Img variant="top" style={{height:'25rem', width: '100%', objectFit:'cover'}} src={donation.item_imageUrl}/>
                      <Card.Body style={{ height: '14rem'}}>
                        <Card.Title>{donation.item_name}</Card.Title>
                        <Card.Text>Donated by {donation.username}</Card.Text>
                        <Card.Text>Quantity: {donation.item_quantity}</Card.Text>
                        <Card.Text>{donation.item_description} </Card.Text>
                      </Card.Body>
                    </Card>
                    </div>
                  ))}
                </Carousel>
        </Container>
      </section>
  )
}
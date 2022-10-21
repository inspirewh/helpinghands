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
          ...don.item_received,
        }
      })
    })

    // const received = function(){
    //   {donations.map((donation) => {
    //     if(donation.item_received === true){
    //        return <Card.Text>Item is received and waiting to find it's new home!</Card.Text>
    //     }else{
    //       return <Card.Text>Item is on it's way!</Card.Text>
    //     }
    //   })}
    // }

    function receive(donations){
      const receivedStatus = donations.item_received
      if(receivedStatus === true){
               return "Item is received and waiting to find it's new home!"
            }else{
              return "Item is on it's way!"
            }
    }

    /// show all donations in cards
    // each card should have username

return (
      <section className="donation" id="donation">
        <Container>
            <Row>
                <Col>
                <div className="donation-bx">
                    <h2>
                      Live Donation Feed  
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare congue pharetra. Curabitur non leo ut quam tincidunt maximus. Etiam id diam at velit ornare vehicula eu nec augue. Nunc id faucibus sem, ac mollis nulla. Sed luctus viverra pulvinar.</p>
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
                  {/* when new donation is submitted then add to the front of the carousel */}
                  {donations.map((donation) => (
                    <div className="item" key={donation._id}>
                    <Card style={{ width: '100%'}}>
                      <Card.Img variant="top" src={donation.item_imageUrl}/>
                      <Card.Body>
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
        <img className="background-image-left" alt="bg pic" src={colorSharp} />
      </section>
  )
}
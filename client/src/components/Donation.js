import { Container, Row, Col, Card, ListGroup, Carousel } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"
import donationImg from "../assets/img/tshirtPlaceholder.jpg";


// creating to sliding carousel display resume of job history
export const DonationFeed = () => {
      const responsive = {
        superLargeDesktop: {

          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
            </div>
          </Col>
          </Row>
          </Container>
          <Container className="donation-container">
          <Row>
            <Col>
              <Carousel responsive={responsive} infinite={true} className="resume-slide">
                    <div className="item">
                    <img src={donationImg} />
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare congue pharetra. Curabitur non leo ut quam tincidunt maximus. Etiam id diam at velit ornare vehicula eu nec augue. Nunc id faucibus sem, ac mollis nulla. Sed luctus viverra pulvinar.</p>
                    </div>
                    <div className="item">
                    <img src={donationImg} />
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare congue pharetra. Curabitur non leo ut quam tincidunt maximus. Etiam id diam at velit ornare vehicula eu nec augue. Nunc id faucibus sem, ac mollis nulla. Sed luctus viverra pulvinar.</p>
                    </div>
                    <div className="item">
                    <img src={donationImg} />
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare congue pharetra. Curabitur non leo ut quam tincidunt maximus. Etiam id diam at velit ornare vehicula eu nec augue. Nunc id faucibus sem, ac mollis nulla. Sed luctus viverra pulvinar.</p>
                    </div>
                </Carousel>
              </Col>
          </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
)
}
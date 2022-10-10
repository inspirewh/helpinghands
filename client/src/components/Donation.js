import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"
import teamImg from "../assets/img/teamphoto.png";


// creating to sliding carousel display resume of job history
export const Donation = () => {
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
      <section className="about" id="about">
        <Container>
            <Row>
                <Col>
                <div className="about-bx">
                    <h2>
                      Live Donation Feed
                    </h2>
                    <p>Launched in 2022, Helping Hands is the world’s largest social donation platform. With over 1 million items being donated from more than 20 different countries, we’re on a mission to help people donate new and pre-loved items to those in need.</p>
                    <div className="about-imgbx">
                      <img src={teamImg} />
                        <div className="about-txtx">
                            <h4>Web Development</h4>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </div>
                    </div>
                  </div>
                <Carousel responsive={responsive} infinite={true} className="about-slide">
                    <div className="item">
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare congue pharetra. Curabitur non leo ut quam tincidunt maximus. Etiam id diam at velit ornare vehicula eu nec augue. Nunc id faucibus sem, ac mollis nulla. Sed luctus viverra pulvinar.</p>
                    </div>
                    <div className="item">
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare congue pharetra. Curabitur non leo ut quam tincidunt maximus. Etiam id diam at velit ornare vehicula eu nec augue. Nunc id faucibus sem, ac mollis nulla. Sed luctus viverra pulvinar.</p>
                    </div>
                    <div className="item">
                        <h3>UX/UI</h3>
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
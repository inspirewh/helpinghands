import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import teamImg from "../assets/img/teamphoto.png";


// creating to sliding carousel display resume of job history
export const AboutUs = () => {
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
                      About Helping Hands 
                    </h2>
                    <p>Launched in 2022, Helping Hands is the worlds largest social donation platform. With over 1 million items being donated from more than 20 different countries, were on a mission to help people donate new and pre-loved items to those in need.</p>
                    <div className="about-imgbx">
                      <img alt="about us information" src={teamImg} />
                        <div className="about-txtx">
                            <h4>The worlds largest social donation platform</h4>
                            <span>On a mission to help people donate new and pre-loved items to those in need..</span>
                        </div>
                    </div>
                  </div>
                <Carousel responsive={responsive} infinite={true} className="about-slide">
                    <div className="item text-dark m-2">
                        <h3>Kindness</h3>
                        <p>Through our platform you can offer an items to people in need. We believe that when you pay it forward the effects of positive change multiply at a much faster rate. It creates shape similar to a root system of a tree. The more roots, the stronger the foundation.</p>
                    </div>
                    <div className="item text-dark m-2">
                        <h3>Locations</h3>
                        <p>We have multiple locations around the world. Simply post your donation to a drop off point and we will handle the rest. The <b>last Friday</b> of <b>every month</b>, helpers at helping hand roll out the items to the people in need all across the world </p>
                    </div>
                    <div className="item text-dark m-2">
                        <h3>Trust</h3>
                        <p>We have built and are continuing to build a trustworthy relationship with all our helping hands. As we have just started out reach out to us on how we can improve and feel free to leave us a good review once you recieve the confirmation that your item is in safe hands</p>
                    </div>
                </Carousel>
                </Col>
            </Row>
        </Container>
      </section>
  )
}
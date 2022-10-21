import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"
import howitworks from "../assets/img/howitworks.jpg";


// creating to sliding carousel display resume of job history
export const Works = () => {
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
      <section className="HowitWorks" id="HowitWorks">
        <Container>
            <Row>
                <Col>
                <div className="HowitWorks-bx">
                    <h2>
                      How Helping Hands Works 
                    </h2>
                    <p>Donating new and pre-loved items to those in need made simple and easy to do. Helping Hands, helping you and make a difference in 3 simple steps <br></br> <br></br> <span className="fw-bold">1. Get Setup</span> <br></br> Start with the basics. Create your secure profile, with just a few short answers and away you go.
                    <br></br> <br></br> <span className="fw-bold">2. Get Donating</span> <br></br> Navigate to the "Get Donating" Page and complete the form; simply upload a clear image of the item, enter a title, description and quanity and of the item you are donating.
                    <br></br> <br></br> <span className="fw-bold">3. Drop Off Your Donations</span> <br></br> We have numberous drop off points, simply drop off your donations to a Drop Off point. Once dropped off your item will be marked as receieved and your donation will be on it's way to lend a helping hand.</p>
                    <div className="HowitWorks-imgbx">
                      <img alt="HowitWorks us information" src={howitworks} />
                        <div className="HowitWorks-txtx">
                            <h4>Helping you help others</h4>
                            <span>Helping you donate new and pre-loved items to those in need</span>
                        </div>
                    </div>
                  </div>
                <Carousel responsive={responsive} infinite={true} className="HowitWorks-slide">
                    <div className="item">
                        <h5 className="fw-bold">How do I start lending a Helping Hand?</h5>
                        <p>Just tap the "Start Donating" button on our website. Create your secure profile, with just a few short answers. Once you have created your profile you can navigate to the "Get Donating" Page and complete the form; simply upload a clear image of the item, enter a title, description and quanity and of the item you are donating.</p>
                    </div>
                    <div className="item">
                    <h5 className="fw-bold">Who is Helping Hands for?</h5>
                        <p>All donations donated through Helping Hands are distrubted to homeless shelters and women and children's refuge's so you can donate knowing your new or pre-loved items and lending a helping hand to those in need</p>
                    </div>
                    <div className="item">
                    <h5 className="fw-bold">Why helping Hands?</h5>
                        <p>Helping Hands is an easy and powerful way to offer help to those in need, trusted by over 100 million people. Making it easier and more effieint to lend a helping hand, whenever you can.</p>
                    </div>
                </Carousel>
                </Col>
            </Row>
        </Container>
        <img alt="How it works image" className="background-image-left" src={colorSharp} />
      </section>
  )
}
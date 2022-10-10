import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"
import fitnessImg from "../assets/img/fitness-app.png";


// creating to sliding carousel display resume of job history
export const ResumeComp = () => {
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
      <section className="resume" id="resume">
        <Container>
            <Row>
                <Col>
commit
                </Col>
            </Row>
        </Container>
        <Container>
          <Card style={{ width: '30rem' }}>
            <Card.Img className="donationImg" variant="top" src={fitnessImg} />
            <Card.Body>
              <Card.Title>Item Title</Card.Title>
              <Card.Text>
                Item Description: Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Container>
        <img className="background-image-left" src={colorSharp} />
      </section>
  )
}
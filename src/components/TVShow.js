import { Card, Container, Row, Col, Image } from "react-bootstrap"
import breakingbadImage from "../assets/tvshow/breakingbad.jpg"
import peacemakerImage from "../assets/tvshow/peacemaker.jpg"
import supernaturalImage from "../assets/tvshow/supernatural.jpg"

const TVShow = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TV SHOW</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="tvshow">
            <Card className="movieImage">
              <Image src={breakingbadImage} alt="breakingbadtvshow" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BREAKING BAD</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 5 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={peacemakerImage} alt="peacemakertvshow" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">PEACEMAKER</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supernaturalImage} alt="supernaturaltvshow" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SUPERNATURAL</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          </Row>
      </Container>
    </div>
  )
}

export default TVShow
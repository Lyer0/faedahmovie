import { Card, Container, Row, Col, Image } from "react-bootstrap"
import batmanImage from "../assets/movie/batman.jpg"
import doctorstrangeImage from "../assets/movie/doctorstrange.jpg"
import sonic2Image from "../assets/movie/sonic2.jpg"

const Movie = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">MOVIE</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="movie">
            <Card className="movieImage">
              <Image src={batmanImage} alt="batmanmovie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">THE BATMAN</Card.Title>
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
              <Image src={doctorstrangeImage} alt="doctorstrangemovie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS</Card.Title>
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
              <Image src={sonic2Image} alt="sonic2movie" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SONIC THE HEDGEHOG 2</Card.Title>
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

export default Movie
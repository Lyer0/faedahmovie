import { Card, Container, Row, Col, Image } from "react-bootstrap"
import onepieceImage from "../assets/anime/onepiece.jpg"
import borutoImage from "../assets/anime/boruto.jpg"
import summertimeImage from "../assets/anime/summertime.jpg"

const Anime = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">ANIME</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="anime">
            <Card className="movieImage">
              <Image src={onepieceImage} alt="onepieceanime" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ONE PIECE</Card.Title>
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
              <Image src={borutoImage} alt="borutoanime" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">BORUTO</Card.Title>
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
              <Image src={summertimeImage} alt="summertimeanime" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SUMMERTIME RENDER</Card.Title>
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

export default Anime
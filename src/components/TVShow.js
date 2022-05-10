import { Card, Container, Row, Col, Image } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState} from "react"

const TVShow = () => {
  const [tvs, setTVS] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/tv`, {
      params : {
        api_key : process.env.REACT_APP_TMDB_KEY
      }
    }).then((response) => {
      setTVS(response.data.results)
    })
  }, [])
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white text-center d-flex justify-content-center align-items-center">TV SHOW</h1>
        <br />
        <Row>
        {tvs.map((result, index) => {
            return(
              <Col md={4} className="movieWrapper" id="tvshow" key={index}>
            <Card className="movieImage">
              <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="testtv" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">{result.name}</Card.Title>
                  <Card.Text className="text-left">
                    {result.overview}
                  </Card.Text>
                  <Card.Text className="text-left">
                    {result.first_air_date}
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>)
          })}
          </Row>
      </Container>
    </div>
  )
}

export default TVShow
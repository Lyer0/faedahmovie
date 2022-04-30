import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div> 
        <Navbar bg ="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Faedah Movies</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#anime">Anime</Nav.Link>
                    <Nav.Link href="#movie">Movies</Nav.Link>
                    <Nav.Link href="#tvshow">TV Show</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar
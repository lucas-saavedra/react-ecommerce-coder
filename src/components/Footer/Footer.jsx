
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Footer = () => {
    return (

        <Container fluid className="bg-dark text-white py-2 text-center footer"  >
            <Row>
                <Col className="mb-2">
                    &copy; Lucas Saavedra - Desarrollo Web
                </Col>
            </Row>
        </Container>

        /* 
        <footer className="">
            <div className="container bg-black ">
                <div className="text-white-50 small">
                    <div className="mb-2">&copy; Lucas Saavedra - Desarrollo Web</div>
                </div>
            </div>
        </footer> */
    )
}

export default Footer

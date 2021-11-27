
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white text-center footer"  >
            <Row>
                <Col className="mb-2">
                    &copy; Lucas Saavedra - Desarrollo Web
                </Col>
            </Row>
        </div>
    )
}

export default Footer

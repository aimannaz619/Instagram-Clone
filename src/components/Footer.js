import { Container, Row, Col } from "react-bootstrap";
import { BsFillHouseDoorFill, BsSearch, BsPlusCircle } from "react-icons/bs";

function Footer() {
  return (
    <footer className="fixed-bottom bg-light p-3">
      <Container>
        <Row className="justify-content-around align-items-center">
          {/* Home icon */}
          <Col xs="auto">
            <div className="footer-icon  d-flex justify-content-center align-items-center">
              <BsFillHouseDoorFill size={30} />
            </div>
          </Col>

          {/* Search icon */}
          <Col xs="auto">
            <div className="footer-icon  rounded-circle d-flex justify-content-center align-items-center">
              <BsSearch size={30} />
            </div>
          </Col>

          {/* Plus icon */}
          <Col xs="auto">
            <div className="footer-icon  rounded-circle d-flex justify-content-center align-items-center">
             
                {" "}
                <BsPlusCircle size={30} />
             
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;

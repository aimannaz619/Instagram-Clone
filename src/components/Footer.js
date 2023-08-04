import { Container, Row, Col } from "react-bootstrap";
import { BsFillHouseDoorFill, BsSearch, BsPlusCircle } from "react-icons/bs";
import CreatePostsForm from "./createPostsForm";
import { Link, redirect } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed-bottom bg-light p-3">
      <Container>
        <Row className="justify-content-around align-items-center">
          {/* Home icon */}
          <Col xs="auto">
            <div className="footer-icon  d-flex justify-content-center align-items-center">
             <Link to="/"> <BsFillHouseDoorFill size={30} style={{ color: "black" }} /></Link>
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
              <Link to="/createposts">
                <BsPlusCircle size={30} style={{ color: "black" }} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;

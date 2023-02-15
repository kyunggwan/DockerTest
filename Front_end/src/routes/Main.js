import "../components/Main.css";
import Mynavbar from "../components/Mynavbar";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Page1 from "./Page1"
import Page2 from "./Page2"
import Page3 from "./Page3"

function Main() {
  return (
    <>
      <Mynavbar />
      <Tab.Container id="left-tabs-example" defaultActiveKey={'p1'}>
        <Row className="navrow">
          <Col sm={2} className="col2nav">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="p1">안전등급확인</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="p2">모든차량조회</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="p3">운행 정보 분석</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="p1">
                <Page1 />
              </Tab.Pane>
              <Tab.Pane eventKey="p2">
                <Page2 />
              </Tab.Pane>
              <Tab.Pane eventKey="p3" >
                <Page3 />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
}
export default Main;



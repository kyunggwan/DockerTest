import { useState } from "react";
import { Nav, Container, Row, Col, Alert } from "react-bootstrap";
import Mymap from "../components/Mymap";
import styled from 'styled-components';

function Page3() {
  let [tab, setTab] = useState(0)

  let Box20 = styled.div`padding-bottom : 20px;`;
  let Box8 = styled.div`padding-bottom : 8px;`;
  return (
    <>
      <Nav variant="pills" className="nav2">
        <Nav.Item>
          {/* <Nav.Link className="nav-link2" onClick={() => { setTab(0) }}
            eventKey="link0"></Nav.Link> */}
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="nav-link2" onClick={() => { setTab(1) }}
            eventKey="link1">운행주의 지점 확인</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} />
    </>
  );

  function TabContent({ tab }) {
    return (
      <>
        {[
          <>
            <Container>
              <Row>
                <Col>
                  <Alert variant="light" className="alert3-1">
                    <p className="mb-1">
                      교통안전공단에 DTG 운행기록 및 운행관제, 차량배차 관리, 운행분석 통계를 실시간 제공하여<br />
                      유류비 절감은 물론 교통사고를 예방합니다.
                    </p>
                  </Alert>
                </Col>
              </Row>
              <Row>
                <img
                  className="servicemain"
                  alt=""
                  src={process.env.PUBLIC_URL + "/img/1-3.png"}
                />
              </Row>
              <Box20 />
              <Box20 />
              <Box20 />
              <Box20 />
              <Box8 />
              <Box8 />
            </Container>
          </>,
          <div className="tab3-1"><Mymap /></div>
        ]
        [tab]}

      </>
    );

  }

}
export default Page3;

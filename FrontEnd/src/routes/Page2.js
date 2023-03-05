import { useState } from "react";
import Mytable from "../components/Mytable";
import { Nav, } from "react-bootstrap";
import Allchart from "../components/Allchart";

function Page2() {
  let [tab, setTab] = useState(0)

  return (
    <>
      <Nav variant="pills" defaultActiveKey="/link0" className="nav2">
        <Nav.Item className="nav-item1">
          <Nav.Link className="nav-link1" onClick={() => { setTab(0) }}
            eventKey="link0">테이블</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item1">
          <Nav.Link className="nav-link1" onClick={() => { setTab(1) }}
            eventKey="link1">그래프</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </>
  );


  function TabContent({ tab }) {
    return (
      <>
        {[
          <div className="tab2-2"><Mytable /></div>,
          <div className="tab2-1"><Allchart /></div>
        ][tab]}

      </>
    );

  }
}
export default Page2;

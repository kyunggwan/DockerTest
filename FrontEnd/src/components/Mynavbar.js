import { Navbar, Container } from "react-bootstrap";

const Mynavbar = () => {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top" sticky="top">
        <Container className="container1">
          <Navbar.Brand href="/">
            <img
              alt=""
              // src={process.env.PUBLIC_URL + "/img/bus3.png"}
              src={process.env.PUBLIC_URL + "https://cdn-icons-png.flaticon.com/512/1048/1048333.png"}
              // src={process.env.PUBLIC_URL + "/img/bus3.png"}
              width="130" height="110" className="logo"
            />{' '}
            <h1 className="one">사업용 버스 운행 분석 웹서비스</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Mynavbar;



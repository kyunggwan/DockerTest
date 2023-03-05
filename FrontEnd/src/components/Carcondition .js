import { useSelector } from "react-redux"
import { Table, Row, Col, Card, Button } from "react-bootstrap";
import Mynavbar from "./Mynavbar";
import Chart from "./Chart";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

function Carcondition() {
    let { oil } = useSelector((state) => { return state })
    let { vehicle } = useSelector((state) => { return state })
    let { id } = useParams();
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchUsers = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setUsers(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const res = await axios.get(`/drive/${id}`);
            setUsers(res.data); // 데이터는 res.data 안에 들어있습니다.
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
    if (!users) return null;

    let listsafety = users.map((a, i) =>
        a
    )
    let listoil = oil.filter((a) => a.car_num == id)
        .map((a, i) =>
            a
        )

    return (
        <>
            <div className="carmain">
                <Mynavbar />
                <Row className="carrow1">
                    <Col lg={4}>
                        <h2 style={{ textAlign: 'center', marginTop: '25px' }}>
                            {id}번 차량 운행 정보</h2>
                        <Table className="table1">
                            <thead className="thead2">
                                <tr>
                                    <th style={{ color: 'black' }} className="th1-1">차량번호</th>
                                    <th style={{ color: 'black' }} className="th1-1">운행일자</th>
                                    <th style={{ color: 'black' }} className="th1-1">급가속횟수</th>
                                    <th style={{ color: 'black' }} className="th1-1">급감속횟수</th>
                                    <th style={{ color: 'black' }} className="th1-1">안전운전율</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listsafety.map((a, i) => {
                                    return [
                                        <tr key={i}>
                                            <td>{a.car_num}</td>
                                            <td>{a.date}</td>
                                            <td>{a.rac}</td>
                                            <td>{a.sds}</td>
                                            <td>{a.dsr}</td>
                                        </tr>
                                    ]
                                })}
                            </tbody>
                        </Table>
                        <div className="cardlist">
                            {vehicle.map((a, i) => (
                                <Card
                                    key={i}
                                    border={a.judgment >= 2 ? 'danger' : 'success'}
                                    className="mb-3"
                                >
                                    <Button href={`/drive/${a.car_num}`}
                                        className={`bt2-${a.judgment}`} variant="dark">
                                        차량번호<br></br> {a.car_num}
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    </Col>
                    <Col className="chart"  >
                        <Chart listsafety={listsafety} listoil={listoil} />
                    </Col>
                    <h2 style={{
                        textAlign: 'center', paddingLeft: '550px'
                    }}>
                        날자별 안전운전율 그래프</h2>
                </Row>
            </div>
        </>
    )

}

export default Carcondition;
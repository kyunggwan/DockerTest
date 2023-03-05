import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import { Button, ButtonGroup, ProgressBar } from "react-bootstrap";

const { kakao } = window;
let busmarkers = [];
let busmarker = null;

function Mymap() {
    let { gps } = useSelector((state) => { return state })
    const [kakaoMap, setKakaoMap] = useState(null);
    const [, setMarkers] = useState([]);
    const [, setPolyline] = useState([]);
    const [markerPositions, setMarkerPositions] = useState([]);
    const [buspaths, setBuspaths] = useState([]);
    let [cnt, setCnt] = useState(0);
    const [delay, setDelay] = useState(200);
    const [isRunning, setIsRunning] = useState(false);

    // 경고등운행 판별 sra필드값이 0이 아닌 구간에 대해 경고등 마커 표시하기 위해 필터링
    const marker = gps.filter((a) => a.sra !== 0).map((a) => {
        return [a.car_location_GPS_Y, a.car_location_GPS_X];
    }
    )

    //버스 운행 경로 gps(위도경도값) 배열에 저장해서 Polyline 그릴때 사용
    const path = gps.map((a) =>
        [a.car_location_GPS_Y, a.car_location_GPS_X]
    )


    //지도 생성
    useEffect(() => {
        const center = new kakao.maps.LatLng(35.198, 129.189);
        // 지도의 중심좌표
        const mapContainer = document.getElementById('map');
        // 지도를 그릴 경로
        const options = {
            center,
            level: 7
            // 지도의 확대 레벨
        };
        const map = new kakao.maps.Map(mapContainer, options);
        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        setKakaoMap(map);
        // 교통정보 지도로 출력변경
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    }, [])


    useEffect(() => {
        if (kakaoMap === null) {
            return;
        }
        const center = kakaoMap.getCenter();
        // relayout and...
        kakaoMap.relayout();
        // restore
        kakaoMap.setCenter(center);

    }, [kakaoMap]);

    useEffect(() => {
        if (kakaoMap === null) {
            return;
        }
        //이동경로와 마커를 배열에 저장
        const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));
        const paths = buspaths.map(pos => new kakao.maps.LatLng(...pos));

        //버스이동경로 배열에 저장
        const path = [gps.map((a) =>
            new kakao.maps.LatLng(
                a.car_location_GPS_Y,
                a.car_location_GPS_X
            )
        )]

        //set함수를 state에 담아서 온/오프 구현
        setPolyline(polylines => {
            polylines.forEach(i => i.setMap(null));
            return paths.map(() => new kakao.maps.Polyline({
                map: kakaoMap,
                path: path, //선의 구성하는 좌표 배열 입니다.
                strokeColor: '#3f4e4f', //선의 색상입니다.
                strokeWeight: 12, // 선의 두께 입니다
                strokeOpacity: 0.005, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle: 'line', // 선의 스타일입니다
                endArrow: true,
            })

            );
        });

        //set함수를 state에 담아서 온/오프 구현
        setMarkers(markers => {
            // clear prev markers
            markers.forEach(i => i.setMap(null));
            // assign new markers
            return positions.map(
                position => new kakao.maps.Marker({
                    map: kakaoMap,
                    position,
                    image: markerImage,
                    opacity: 1,
                })
            );
        });



        //경고등 마커 생성
        const markerImageUrl = 'https://cdn-icons-png.flaticon.com/512/2556/2556974.png',
            markerImageSize = new kakao.maps.Size(35, 35), // 마커 이미지의 크기
            markerImageOptions = {
                offset: new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
            };
        // 마커 이미지를 생성
        const markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

        var content = '<button><h2>버스종점!</h2></button>';
        // 커스텀 오버레이가 표시될 위치입니다 
        var position = new kakao.maps.LatLng(35.244, 129.1592);
        // 커스텀 오버레이를 생성합니다
        var customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: content
        });

        var content1 =
            '<div>' +
            '<table>' +
            '<thead>' +
            '<tr>' +
            '<th>115-1번</th>' +
            '<th>버스운행정보</th>' +
            '</tr >' +
            '</thead>' +
            '<tbody>' +
            '<tr>' +
            '<td>출발지</td>' +
            '<td>고촌역</td>' +
            '</tr>' +
            '<tr>' +
            '<td>주요 정유장</td>' +
            '<td>영산대 - 벡스코 - 해운대역 - 해운대구청</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<div class="mapimg1"></div>' +
            '</td>' +
            '<td>버스운행경로</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<div class="mapimg2"></div>' +
            '</td>' +
            '<td>운행주의지점</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '<div class="mapimg3"></div>' +
            '</td>' +
            '<td>실시간 버스 위치</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</div>';


        // 커스텀 오버레이가 표시될 위치입니다
        var position1 = new kakao.maps.LatLng(35.19589384701767, 129.23898393888751);

        // 커스텀 오버레이를 생성합니다
        let businfo = new kakao.maps.CustomOverlay({
            position: position1,
            content: content1,
            xAnchor: 0.3,
            yAnchor: 0.91
        });



        // 커스텀 오버레이를 지도에 표시합니다
        customOverlay.setMap(kakaoMap);
        businfo.setMap(kakaoMap);


        //이동경로 마커 중복제거
        for (let i = 0; i < busmarkers.length; i++) {
            busmarkers[i].setMap(null);
        }
        busmarkers.length = 0;
        //이동경로 마커 이동 구현
        for (let i = 0; i < gps.length; i++) {
            // const busurl = 'https://cdn.pixabay.com/photo/2014/04/03/10/31/bus-310764_960_720.png',
            const busurl = 'https://cdn-icons-png.flaticon.com/512/744/744466.png',
                imgsize = new kakao.maps.Size(120, 120), // 마커 이미지의 크기
                imgopt = {
                    offset: new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
                };
            // 마커 이미지를 생성
            const markerImage2 = new kakao.maps.MarkerImage(busurl, imgsize, imgopt);

            busmarker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(
                    gps[cnt]?.car_location_GPS_Y,
                    gps[cnt]?.car_location_GPS_X),
                image: markerImage2
            });
            busmarkers.push(busmarker);
            busmarker.setMap(kakaoMap);
        }

    }, [kakaoMap, markerPositions, buspaths, cnt, busmarkers]);

    
    useInterval(() => {
        if (cnt <= gps.length) {
            setCnt(cnt + 2);
        }
    }
        , isRunning ? delay : null);



    function handleDelayChange(e) {
        setDelay(Number(e.target.value));
    }

    function handleIsRunningChange(e) {
        setIsRunning(e.target.checked);
    }


    const handleReset = () => {
        setCnt(0);
    }

    return (
        <>
            <ButtonGroup aria-label="Basic example" className="mb-2">
                <Button onClick={() => setBuspaths(path)} variant="secondary">운행 경로 확인</Button>
                <Button onClick={() => setBuspaths([])} variant="secondary">경로 지우기</Button>
                <Button onClick={() => setMarkerPositions(marker)} variant="secondary">운행 주의 지점 보기</Button>
                <Button onClick={() => setMarkerPositions([])} variant="secondary">지점 지우기</Button>
            </ButtonGroup>
            <ButtonGroup style={{ marginLeft: '10px' }} aria-label="Basic example" className="mb-2">
                <label className="btn btn-secondary" for="btn-check">모의주행</label>
                <Button classclassName="btn btn-secondary" variant="secondary" onClick={handleReset}>초기화</Button>
                <label className="btn btn-secondary" for="btn btn-secondary">딜레이값 ▶
                </label>
                <input id="btn btn-secondary" className="btn btn-secondary" size={15} value={delay} onChange={handleDelayChange} />
            </ButtonGroup>
            <input type="checkbox" className="btn-check" id="btn-check" checked={isRunning} onChange={handleIsRunningChange} />

            {
                cnt != 0 && cnt <= gps.length ? <h4 style={{ textAlign: 'center' }}>모의주행 {(cnt / gps.length * 100).toFixed(1)}% 진행중</h4> : null
            }
            {
                cnt != 0 && cnt <= gps.length ? <ProgressBar className="progress" variant="success" now={(cnt / gps.length) * 100} /> : null
            }
            <div
                id="map"
                style={{
                    width: '84vw',
                    height: '80vh'
                }}></div>

        </>
    );
}

export default Mymap;

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

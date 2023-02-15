import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGpsList } from './store'
import { getDriveList } from './store'
import { getVehicleList } from './store'
import { getOilList } from './store'
import Carcondition from "./components/Carcondition ";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    (async () =>
      await axios
        .get("/simul")
        .then((result) => {
          dispatch(getGpsList(result.data));
        })
        .catch(() => console.log("데이터가져오기 실패")))();
  }, []);
  useEffect(() => {
    (async () =>
      await axios
        .get("/vehicle")
        .then((result) => {
          dispatch(getVehicleList(result.data));
        })
        .catch(() => console.log("데이터가져오기 실패")))();
  }, []);
  useEffect(() => {
    (async () =>
      await axios
        .get("/drive")
        .then((result) => {
          dispatch(getDriveList(result.data));
        })
        .catch(() => console.log("데이터가져오기 실패")))();
  }, []);
  useEffect(() => {
    (async () =>
      await axios
        .get("/oil")
        .then((result) => {
          dispatch(getOilList(result.data));
        })
        .catch(() => console.log("데이터가져오기 실패")))();
  }, []);

  let { vehicle } = useSelector((state) => { return state })


  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        {vehicle.map((a, i) => (
          <Route
            key={i}
            path={'/drive/:id'}
            element={<Carcondition />} />
        ))}
        {/* <Route path="*" element={<h4>존재하는 않는 페이지 입니다.<br></br>주소를 확인해주세요</h4>} /> */}
      </Routes>

    </>
  );
}

export default App;

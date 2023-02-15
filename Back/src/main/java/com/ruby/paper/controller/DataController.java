package com.ruby.paper.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ruby.paper.domain.DrivingVO;
import com.ruby.paper.domain.OilVO;
import com.ruby.paper.domain.SimulVO;
import com.ruby.paper.domain.VehicleVO;
import com.ruby.paper.service.DataService;

//웹 브라우저의 요청을 받는다.
@RestController
public class DataController {

	// DataService 객체 생성
	private DataService ds;
	// Logger 사용 
	private static final Logger log = LoggerFactory.getLogger(DataController.class);

	@Autowired
	public DataController(DataService ds) {
		this.ds = ds;
		log.info("DataController 생성자가 호출됨");
	}

	@GetMapping("/simul")
	public List<SimulVO> simulInfo(){
		log.info("DataController - simulInfo()가 호출됨");
		return ds.simulInfo();
	}

	//차량 번호로 정보 조회
	@GetMapping("/drive/{car_num}")
	public List<DrivingVO> getSearch(@PathVariable String car_num) {
		log.info(String.format("DataController - getSearch(%s)가 호출됨", car_num));
		return ds.getSearch(car_num);
	}

	// Driving_Unit_Data 테이블의 모든 정보 출력
	@GetMapping("/drive")
	public List<DrivingVO> driveInfo() {
		log.info("DataController - driveInfo()호출");
		return ds.driveInfo();
	}

	// Vehicle_Information_Data 테이블의 모든 정보 출력
	@GetMapping("/vehicle")
	public List<VehicleVO> vehicleInfo() {
		log.info("DataController - vehicleInfo()호출");
		return ds.vehicleInfo();
	}

	// Oil 테이블의 모든 정보 출력
	@GetMapping("/oil")
	public List<OilVO> oilInfo() {
		log.info("DataController - oilInfo()호출");
		return ds.oilInfo();
	}
}

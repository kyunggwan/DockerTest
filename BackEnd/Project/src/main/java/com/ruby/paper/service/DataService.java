package com.ruby.paper.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ruby.paper.dao.data.DataInterface;
import com.ruby.paper.domain.DrivingVO;
import com.ruby.paper.domain.OilVO;
import com.ruby.paper.domain.SimulVO;
import com.ruby.paper.domain.VehicleVO;

// 서비스 레이어, 내부 로직을 처리 
@Service
public class DataService {

	// Interface로 구현된 dao들로 서비스 구현
	private DataInterface dao;

	// 생성자를 통해서 의존성 주입
	@Autowired
	public DataService(DataInterface dao) {
		this.dao = dao;
}
	
	@SuppressWarnings("unchecked")
	public List<SimulVO> simulInfo(){
		Map<String, Object> map = dao.simulInfo();
		List<SimulVO> list = (List<SimulVO>) map.get("data");
		return list;
	}
	
	@SuppressWarnings("unchecked")
	public List<DrivingVO> getSearch(String car_num) {
		Map<String, Object> map = dao.getSearch(car_num);
		List<DrivingVO> d = (List<DrivingVO>) map.get("data");
		return d;
	}
	
	@SuppressWarnings("unchecked")
	public List<DrivingVO> driveInfo(){
		Map<String, Object> map = dao.driveInfo();
		List<DrivingVO> list = (List<DrivingVO>) map.get("data");
		return list;
	}
	
	@SuppressWarnings("unchecked")
	public List<VehicleVO> vehicleInfo(){
		Map<String, Object> map = dao.vehicleInfo();
		List<VehicleVO> list = (List<VehicleVO>) map.get("data");
		return list;
	}

	@SuppressWarnings("unchecked")
	public List<OilVO> oilInfo() {
		Map<String, Object> map = dao.oilInfo();
		List<OilVO> list = (List<OilVO>) map.get("data");
		return list;
	}

}

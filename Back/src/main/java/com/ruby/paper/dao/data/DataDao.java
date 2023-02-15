package com.ruby.paper.dao.data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.ruby.paper.domain.DrivingVO;
import com.ruby.paper.domain.OilVO;
import com.ruby.paper.domain.SimulVO;
import com.ruby.paper.domain.VehicleVO;

// DB의 I/O작업 처리
@Repository("DataDao")
public class DataDao implements DataInterface {

	private JdbcTemplate jdbcTemplate;

	// 생성자를 통한 의존성 주입
	@Autowired
	public DataDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
		System.out.println("JDBCTemplate이용");
	}
	
	// 모의주행에 필요한 정보 받음
	@Override
	public Map<String, Object> simulInfo() {
		String sqlString = "select S_ID, car_location_GPS_X, car_location_GPS_Y, SRA"
				+ " from simul";
		Map<String, Object> ret = new HashMap<>();
		ret.put("sql", sqlString);
		try {
			List<SimulVO> list = jdbcTemplate.query(sqlString, new BeanPropertyRowMapper<SimulVO>(SimulVO.class));
			ret.put("data", list);
		} catch (Exception e) {
			ret.put("data", null);
		}
		return ret;
	}

	// 차량의 운행정보를 가져옴
	@Override
	public Map<String, Object> driveInfo() {
		String sqlString = "select car_num, date, dsr, rac, sds, durs "
				+ " from driving_unit_data";
		Map<String, Object> ret = new HashMap<>();
		ret.put("sql", sqlString);
		try {
			List<DrivingVO> list = jdbcTemplate.query(sqlString, new BeanPropertyRowMapper<DrivingVO>(DrivingVO.class));
			ret.put("data", list);
		} catch (Exception e) {
			ret.put("data", null);
		}
		return ret;
	}
	
	// 검색된 차량별로 운행정보를 가져옴
	@Override
	public Map<String, Object> getSearch(String car_num) {
		Map<String, Object> ret = new HashMap<>();
		String sqlString = String.format("select car_num, date, rac, sds, dsr "
				+ " from driving_unit_data"
				+ " where car_num='%s'", car_num);
		ret.put("sql", sqlString);
		try {
			List<DrivingVO> d = jdbcTemplate.query(sqlString, new BeanPropertyRowMapper<DrivingVO>(DrivingVO.class));
			ret.put("data", d);
		} catch (Exception e) {
			ret.put("data", null);
		}
		return ret;
	}
	
	// 안전 운전 등급평가를 위한 정보를 가져옴
	@Override
	public Map<String, Object> vehicleInfo() {
		String sqlString = String.format("select car_num, drs, vrs, ts, judgment "
				+ " from vehicle_information_data");
		Map<String, Object> ret = new HashMap<>();
		ret.put("sql", sqlString);
		try {
			List<VehicleVO> list = jdbcTemplate.query(sqlString, new BeanPropertyRowMapper<VehicleVO>(VehicleVO.class));
			ret.put("data", list);
		} catch (Exception e) {
			ret.put("data", null);
		}
		return ret;
	}
		
	// 유류비 분석 정보를 가져옴
	public Map<String, Object> oilInfo() {
		String sqlString = "select O_ID, date, car_num, daily_distance, oil_money "
				+ " from oil";
		Map<String, Object> ret = new HashMap<>();
		ret.put("sql", sqlString);
		try {
			List<OilVO> list = jdbcTemplate.query(sqlString, new BeanPropertyRowMapper<OilVO>(OilVO.class));
			ret.put("data", list);
		} catch (Exception e) {
			ret.put("data", null);
		}
		return ret;
	}
	
}
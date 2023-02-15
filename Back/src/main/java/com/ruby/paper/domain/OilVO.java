package com.ruby.paper.domain;

public class OilVO {

	private int O_ID; // pk
	private int date; // 운행일자
	private String car_num; // 차량번호
	private int daily_distance; // 일일 주행거리
	private int oil_money; // 기름값

	public OilVO() {
		super();
	}

	public OilVO(int o_ID, int date, String car_num, int daily_distance, int oil_money) {
		super();
		O_ID = o_ID;
		this.date = date;
		this.car_num = car_num;
		this.daily_distance = daily_distance;
		this.oil_money = oil_money;
	}

	public int getO_ID() {
		return O_ID;
	}

	public void setO_ID(int o_ID) {
		O_ID = o_ID;
	}

	public int getDate() {
		return date;
	}

	public void setDate(int date) {
		this.date = date;
	}

	public String getCar_num() {
		return car_num;
	}

	public void setCar_num(String car_num) {
		this.car_num = car_num;
	}

	public int getDaily_distance() {
		return daily_distance;
	}

	public void setDaily_distance(int daily_distance) {
		this.daily_distance = daily_distance;
	}

	public int getOil_money() {
		return oil_money;
	}

	public void setOil_money(int oil_money) {
		this.oil_money = oil_money;
	}

	@Override
	public String toString() {
		return "OilVO [O_ID=" + O_ID + ", date=" + date + ", car_num=" + car_num + ", daily_distance=" + daily_distance
				+ ", oil_money=" + oil_money + "]";
	}

}

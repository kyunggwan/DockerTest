# 사업용 차량 :truck:  안전 위험 분석 웹서비스 프로젝트 

사업용 차량의 운행기록을 바탕으로 차량 안전 관리정보를 보여주는 웹서비스입니다.
#### Project execution period : 2023.01.11~02.09
#### Project Hosting : 호스팅 주소 입력할 것
------------------

## Description
차량의 운전자 및 관리자를 위한 정보제공 시스템으로, 차량에 부착된 단말기로 운행정보를 읽어들여 차량 관리 및 안전 등급 등을 분석해서 알려준다.

## Back-End Team:family:
+ [박경관](https://github.com/kyunggwan)
+ [김찬준](https://github.com/ckswns879)

## :pushpin:Requirements
- SpringBoot 4.16.1.RELEASE
- eclipse 4.25.0
- apache tomcat 9.0.67
- Java JDK 17 or higher
- Maven 3.0.1
- use MySQL database > JdbcTemplate
<div alien=center>
<img src="https://img.shields.io/badge/Spring boot-6DB33F?style=for-the-badge&logo=appveyor&logoColor=white" />
<img src="https://img.shields.io/badge/eclipse-2C2255?style=for-the-badge&logo=appveyor&logoColor=white" />
<img src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=appveyor&logoColor=white" />
<img src="https://img.shields.io/badge/amazon AWS-232F3E?style=for-the-badge&logo=appveyor&logoColor=white" />
<img src="https://img.shields.io/badge/Mysql-4479A1?style=for-the-badge&logo=appveyor&logoColor=white" />
</div>

## :fire:Final Version
![Final](https://user-images.githubusercontent.com/113881846/218413465-dc4bcdef-280d-4ad8-8837-91783dee9694.png)

## :bookmark: Learned
- EC2-Docker, Docker-compose를 활용하여 서버에서 빌드하는 방법을 알 수 있었음
- React와 Spring 프로젝트를 연동하면서 발생한 CORS 에러를 Proxy 설정을 통해 해결할 수 있었음
- Git convention, Code convention 등 협업에 필요한 툴 사용 및 소통방법을 익힐 수 있었음

## :white_check_mark:What's missing
- JPA 활용, 로그인 기능 구현 등을 하고 싶었으나 팀원 보조로 백엔드적으로 손을 많이 못써서 아쉬움
- AWS - RDS, EC2-Docker, Docker-compose 등을 활용했으나 깊게 이해하고 쓰지는 못함. MSA(MicroService Architecture)를 공부하고, 적용해볼 필요가 있음
- 협업 시에 Pull Request, Merge, Issue로 tracking하는 등 git 툴 사용을 더 원할히 할 필요가 있음
- 백엔드에서 단순 테이블 입출력만 했는데, 테이블 join, 디테일한 쿼리 구현, 비지니스 로직이 없어 아쉬움

## 컨테이너 임대관리 솔루션 

### INFO
저희 아버지가 컨테이너 임대 관리일을 하시면서 임차인들로부터 임대료 입금 기록 관리가 쉽지 않아 임대료 입금 기록 누락되는 일과 연체자 파악이 힘들다는 사실을 듣고 **임대물들의 입금 기록과 대여 장부 기록을 쉽게 할 수 있는 솔루션 사이트** 를 만들기로 결정하였습니다. 

이번 프로젝트는 첫 웹 개발 프로젝트로 스스로 학습해나가며, **React/NextJs 개발 실력 향상과 완성을 목표**로 열심히 만들어나가고 있습니다.

<br/>

### 개발 현황 

- 주요기능 결제현황/ 임대현황 / 캘린더 / 컨테이터 등록 / 요약 기능 구현 완료

- 파이어베이스 DB 연동완료

<br/>

### 앞으로 해야할거
- 로그인 기능 
- 캘린더에서 일자 골랐을때 팝업 제대로 안나오는 버그 수정
- 디자인 전면 수정
- 프로젝트 전체 리팩토링, RTK 적용하기
- 모바일 웹 환경 만들기
- 컨테이너 리스트에서 검색 기능 구현하기 
- 컨테이너 리스트에서 페이지네이션 구현하기

<br/>

### 프로젝트 기간 
2023.02 ~ 2023.03.25 진행하였습니다.

 현재는 대학교 학업 문제 / 여러 라이브러리들을 추가적으로 공부하고 Nextjs를 좀 더 이해하고 진행하고자 **임시 중단**하였습니다. 

2023.7월부터 프로젝트 재개 예정입니다. 

<br/>

### 사용 기술
#### Frontend
<div>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
</div>

#### Serverless
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">

<br/>
<br/>

## 프로젝트 사진
#### 컨테이너 리스트 
![image](https://github.com/JuJangGwon/ContainerMananger/assets/40955023/1116faf6-63e2-4686-99cd-55c0cca3738a)
- 컨테이너 목록 화면에서 등록된 컨테이너와 임대여부를 확인할 수 있습니다.

<br/>
<br/>

#### 컨테이너 정보창
![image](https://github.com/JuJangGwon/ContainerMananger/assets/40955023/4d93a168-4f31-4dc9-ac91-c0ed778c8220)
![image](https://github.com/JuJangGwon/ContainerMananger/assets/40955023/0ac914b7-8a66-4c06-a6f8-69d4917bb49c)
- 저장된 컨테이너 정보와 임대 기록을 작성 할 수 있으며, 임대 여부, 정보를 작성 할 수 있습니다.
- 결제정보 창의 결제 현황에서 연체는 <span style='background-color: #ffdce0'>빨간색</span>, 결제확인은 <span style='background-color: #dcffe4'>초록색</span>, 다가오지 않은 결제일은 <span style="background-color:#F5F5F5"> 회색 </span>으로 표시되며, 클릭으로 결제기록을 쉽게 변경할 수 있습니다.

<br/>
<br/>

#### 결제 캘린더
![image](https://github.com/JuJangGwon/ContainerMananger/assets/40955023/6baca0db-9ff1-4aa6-a586-ca50fe5dd9d0)
- 임대중인 컨테이너들의 결제일과 결제, 미 결제 여부를 한눈에 파악 할 수 있는 캘린더입니다.
- 해당하는 날의 결제 완료 건수는 <span style='background-color: #dcffe4'>초록색</span>, 미 결제 건수는  <span style='background-color: #ffdce0'>빨간색</span> 표시 됩니다.
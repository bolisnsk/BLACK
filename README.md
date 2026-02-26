# Team Anton
인터랙션 중심의 프론트엔드 페이지 + LocalStorage 기반 CRUD 게시판 프로젝트
검색, 조회수, 수정/삭제 기능을 구현한 Vanilla JS 프로젝트

##  Link
👉 https://your-vercel-link.vercel.app

##  🧩 프로젝트 소개

Team Anton은 브라우저 LocalStorage를 활용해
게시글 작성(Create), 조회(Read), 수정(Update), 삭제(Delete) 기능을 구현한 게시판 프로젝트입니다.

##  🛠 사용 기술

HTML5

CSS3

Vanilla JavaScript (ES6)

GSAP + ScrollTrigger

LocalStorage

GSAP (일부 인터랙션)

단순 기능 구현을 넘어: 유효성 검사, 검색 기능, 조회수 증가 로직, 데이터 구조 설계, 인터랙션 UX 까지 고려하여 제작

##  🚀 주요 기능
1️⃣ 게시글 작성 (Create)

제목 / 작성자 / 내용 입력

공백 입력 방지 (trim 적용)

길이 제한 검증

작성 시 날짜 자동 기록

고유 id(Date.now) 기반 index 생성

2️⃣ 게시글 목록 (Read - List)

제목 클릭 시 상세 페이지 이동

조회수 표시

검색 기능 (제목 + 내용 includes)

3️⃣ 게시글 상세 (Read - View)

상세 정보 출력

페이지 최초 진입 시 조회수 +1

새로고침 중복 카운트 방지 (sessionStorage 활용)

4️⃣ 게시글 수정 (Update)

기존 데이터 자동 입력

유효성 검사 동일 적용

수정 시 날짜 갱신

5️⃣ 게시글 삭제 (Delete)

고유 id 기준 삭제

삭제 후 목록 페이지 이동

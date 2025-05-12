# Toast App

토스트 메시지(Toast Message) UI 컴포넌트 데모 프로젝트입니다.
React와 styled-components를 활용하여 다양한 위치, 상태, 자동/수동 닫기, 드롭다운 네비게이션 등 실무에서 자주 쓰이는 UI/UX를 구현했습니다.

## 주요 기능

- **토스트 메시지 출력**

  - 입력한 메시지를 다양한 위치(6곳)에 토스트로 표시
  - 성공/경고/오류/기본 등 상태별 스타일 및 아이콘 지원
  - 자동 닫기/수동 닫기 선택 가능, 딜레이(ms) 조절 가능
  - 각 위치별로 "모두 지우기" 버튼 제공

- **헤더 네비게이션**

  - Tridge 스타일의 헤더 및 드롭다운 네비게이션 구현
  - 메뉴 클릭 시 드롭다운이 자연스럽게 열리고, 외부 클릭 시 닫힘

- **옵션 박스**

  - 토스트 위치, 자동 닫기, 딜레이 등 옵션을 실시간으로 조정

- **반응형/모던 UI**
  - styled-components 기반의 모던한 디자인
  - 글로벌 스타일 및 컴포넌트별 스타일 분리

## 프로젝트 구조

```
src/
  components/
    Header/         // 헤더 및 드롭다운 네비게이션
    OptionBox/      // 토스트 옵션 선택 UI
    ToastButton/    // 토스트 메시지 출력 버튼
    ToastMessage/   // 토스트 메시지 및 상태 선택
  styles/           // 글로벌 및 앱 스타일
  types/            // 타입 정의
  App.tsx           // 메인 앱 컴포넌트
  index.tsx         // 엔트리포인트
```

## 주요 로직 및 함수 설명

- **토스트 메시지 관리 (src/App.tsx)**

  - `showToastMessage`: 입력값을 바탕으로 토스트 메시지 객체를 생성, 상태에 추가
  - `handleToastClose`: 특정 토스트 메시지 삭제
  - `handleClearAll`: 위치별 토스트 메시지 일괄 삭제
  - `groupedToasts`: 위치별로 토스트 메시지 그룹핑

- **토스트 메시지 동작 (src/components/ToastMessage/index.tsx)**

  - `useEffect`로 자동 닫기 타이머 및 프로그레스바 진행률 관리
  - 마우스 호버 시 타이머 일시정지/재시작
  - 상태별 아이콘 및 색상 자동 적용

- **헤더 드롭다운 (src/components/Header/index.tsx)**
  - `useState`로 드롭다운 오픈 상태 관리
  - `useEffect`로 외부 클릭 시 드롭다운 자동 닫기
  - 메뉴 데이터 및 드롭다운 아이템 동적 렌더링

## 사용 라이브러리

- **React**
- **styled-components**
- **react-icons**
- **TypeScript**

## 실행 방법

```bash
npm install
npm start
```

## 기타

- 본 프로젝트는 UI/UX 데모 및 프론트엔드 과제 제출용으로 제작되었습니다.
- Tridge 홈페이지의 헤더 스타일을 참고하여 네비게이션을 구현하였습니다.

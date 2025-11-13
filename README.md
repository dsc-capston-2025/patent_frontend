# PatentSearch AI

AI 기반 특허 유사도 검색 시스템 - 생각을 말하면 AI가 특허를 찾아드립니다

## 🎨 프로젝트 소개

일상 언어로 아이디어를 설명하면 AI가 똑똑하게 이해하고 비슷한 특허를 찾아주는 서비스입니다.

### 주요 기능

- 🤖 **AI 기반 검색**: 자연어로 아이디어를 설명하면 AI가 이해합니다
- 🎯 **정확한 매칭**: 유사도 기반으로 관련 특허를 정확하게 찾습니다
- ⚡ **빠른 검색**: 수많은 특허 중에서 순식간에 결과를 제공합니다
- 📊 **시각화**: 유사도를 직관적으로 보여줍니다

## 🚀 기술 스택

- **React 18** - 최신 React 기능 활용
- **TypeScript** - 타입 안정성 보장
- **Vite** - 초고속 빌드 도구
- **styled-components** - CSS-in-JS 스타일링
- **Lucide React** - 아름다운 아이콘

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── common/          # 공통 컴포넌트 (Button, Input, Card 등)
│   ├── layout/          # 레이아웃 (Header, Footer)
│   ├── search/          # 검색 관련 컴포넌트
│   └── sections/        # 랜딩 페이지 섹션들
├── data/                # 목 데이터
├── pages/               # 페이지 컴포넌트
├── styles/              # 전역 스타일 및 테마
├── types/               # TypeScript 타입 정의
├── App.tsx             # 메인 앱
└── main.tsx            # 엔트리 포인트
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)이 자동으로 열립니다.

### 3. 프로덕션 빌드

```bash
npm run build
```

### 4. 빌드 미리보기

```bash
npm run preview
```

## 🎯 주요 섹션

### 1. 히어로 섹션
- 메인 타이틀 및 CTA
- 3가지 핵심 가치 제안

### 2. 특허 검색
- 자연어 입력 인터페이스
- 예시 검색어 제공
- 실시간 검색 결과

### 3. 이런 점이 좋아요
- 6가지 주요 기능 소개
- 아이콘과 함께 직관적 설명

### 4. 어떻게 작동하나요
- 4단계 프로세스 시각화
- 단계별 상세 설명

### 5. 누가 사용하면 좋을까요
- 창업자, 연구자, 기업 개발자를 위한 활용 방안
- 각 타겟별 맞춤 설명

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: #000000 (검정)
- **Background**: #ffffff (흰색)
- **Background Light**: #f5f5f5
- **Text**: #111827
- **Text Light**: #6b7280

### 타이포그래피
- 헤딩: 굵은 폰트 (700)
- 본문: 중간 폰트 (400-500)
- 크기: 12px ~ 48px (반응형)

### 반응형 브레이크포인트
- 📱 Mobile: < 480px
- 📟 Tablet: 480px - 768px
- 💻 Desktop: 768px - 1024px
- 🖥️ Wide: > 1280px

## 🔧 API 연동 가이드

현재는 목 데이터(`src/data/mockData.ts`)를 사용합니다.

실제 API 연동 시:

1. **API 클라이언트 생성**
```typescript
// src/api/patentApi.ts
export const searchPatentsAPI = async (query: string) => {
  const response = await fetch(`${API_URL}/search`, {
    method: 'POST',
    body: JSON.stringify({ query }),
  });
  return response.json();
};
```

2. **환경 변수 설정**
```env
# .env
VITE_API_BASE_URL=https://your-api-url.com
```

3. **컴포넌트에서 사용**
```typescript
import { searchPatentsAPI } from '@/api/patentApi';

const handleSearch = async (query: string) => {
  const results = await searchPatentsAPI(query);
  setResults(results);
};
```

## 📱 모바일 최적화

- 터치 인터랙션 최적화
- 반응형 레이아웃
- 모바일 우선 디자인
- 빠른 로딩 속도

## 🚀 배포

### Vercel
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
# build 폴더를 Netlify에 드래그 앤 드롭
```

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

---

Made with ❤️ by DSC Capstone Team

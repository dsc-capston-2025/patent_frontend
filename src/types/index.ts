// API 응답 - 특허 항목 타입
export interface PatentItem {
  patentId: string;
  title: string;
  applicant: string;
  applicationDate: string;
  relevanceScore: string; // API에서 "0.35" 형식으로 옴
  summary: string;
  matchstatus: string; // "success" | "failed"
}

// API 요청 타입
export interface AnalyzeIdeaRequest {
  idea: string;
}

// API 응답 타입
export interface AnalyzeIdeaResponse {
  status: 'success' | 'failed';
  chatResponse: string;
  patentList: PatentItem[];
}

// 레거시 타입 (기존 코드와의 호환성 유지)
export interface Patent {
  id: string;
  title: string;
  applicationNumber: string;
  publicationNumber: string;
  applicant: string;
  inventor: string;
  applicationDate: string;
  publicationDate: string;
  abstract: string;
  claims: string[];
  ipcCode: string;
  similarityScore?: number;
}

// 검색 필터 타입
export interface SearchFilters {
  dateFrom?: string;
  dateTo?: string;
  applicant?: string;
  ipcCode?: string;
}

// 검색 결과 타입
export interface SearchResult {
  query: string;
  totalResults: number;
  results: Patent[];
  searchTime: number;
}


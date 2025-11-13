// 특허 데이터 타입 정의
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


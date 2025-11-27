import { AnalyzeIdeaRequest, AnalyzeIdeaResponse } from '@/types';

const API_BASE_URL = 'http://127.0.0.1:5001';

/**
 * 아이디어를 분석하여 유사 특허를 검색하는 API 호출
 */
export const analyzeIdea = async (idea: string): Promise<AnalyzeIdeaResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/analyze-idea`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idea } as AnalyzeIdeaRequest),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: AnalyzeIdeaResponse = await response.json();
    return data;
  } catch (error) {
    console.error('API 호출 실패:', error);
    throw error;
  }
};


import { useState } from 'react';
import styled from 'styled-components';
import { 
  HeroSection, 
  SearchSection, 
  BenefitsSection, 
  HowItWorksSection, 
  UseCasesSection 
} from '@/components/sections';
import { SearchResults } from '@/components/search';
import { PatentItem } from '@/types';
import { analyzeIdea } from '@/services/api';

const PageContainer = styled.div`
  width: 100%;
`;

const ResultsSection = styled.section`
  width: 100%;
  padding: ${({ theme }) => `80px ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `60px ${theme.spacing.lg}`};
  }
`;

const ResultsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const LandingPage = () => {
  const [results, setResults] = useState<PatentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTime, setSearchTime] = useState<number | undefined>(undefined);
  const [hasSearched, setHasSearched] = useState(false);
  const [chatResponse, setChatResponse] = useState<string>('');
  const [apiStatus, setApiStatus] = useState<'success' | 'failed' | null>(null);
  const [error, setError] = useState<string>('');

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setHasSearched(true);
    setError('');
    const startTime = performance.now();

    // 검색 섹션으로 스크롤
    setTimeout(() => {
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    try {
      // 실제 API 호출
      const response = await analyzeIdea(query);
      const endTime = performance.now();
      
      setApiStatus(response.status);
      setChatResponse(response.chatResponse);
      setResults(response.patentList || []);
      setSearchTime((endTime - startTime) / 1000);
    } catch (err) {
      console.error('검색 실패:', err);
      setError('검색 중 오류가 발생했습니다. 다시 시도해주세요.');
      setApiStatus('failed');
      setChatResponse('');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartSearch = () => {
    const searchElement = document.getElementById('search');
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePatentClick = (patent: PatentItem) => {
    console.log('특허 상세 보기:', patent);
    alert(`${patent.title}\n\n${patent.summary}`);
  };

  return (
    <PageContainer>
      <HeroSection onStartSearch={handleStartSearch} />
      <SearchSection onSearch={handleSearch} />
      
      {hasSearched && (
        <ResultsSection id="results">
          <ResultsContent>
            <SearchResults
              results={results}
              isLoading={isLoading}
              searchTime={searchTime}
              chatResponse={chatResponse}
              apiStatus={apiStatus}
              error={error}
              onPatentClick={handlePatentClick}
            />
          </ResultsContent>
        </ResultsSection>
      )}
      
      <BenefitsSection />
      <HowItWorksSection />
      <UseCasesSection />
    </PageContainer>
  );
};


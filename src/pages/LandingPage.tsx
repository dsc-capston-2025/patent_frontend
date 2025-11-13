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
import { Patent } from '@/types';
import { searchPatents } from '@/data/mockData';

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
  const [results, setResults] = useState<Patent[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTime, setSearchTime] = useState<number | undefined>(undefined);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setHasSearched(true);
    const startTime = performance.now();

    // 검색 섹션으로 스크롤
    setTimeout(() => {
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    // 실제 검색 시뮬레이션 (800ms 딜레이)
    setTimeout(() => {
      const searchResults = searchPatents(query);
      const endTime = performance.now();
      
      setResults(searchResults);
      setSearchTime((endTime - startTime) / 1000);
      setIsLoading(false);
    }, 800);
  };

  const handleStartSearch = () => {
    const searchElement = document.getElementById('search');
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePatentClick = (patent: Patent) => {
    console.log('특허 상세 보기:', patent);
    alert(`${patent.title}\n\n${patent.abstract}`);
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


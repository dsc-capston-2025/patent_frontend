import styled from 'styled-components';
import { Patent } from '@/types';
import { PatentCard } from './PatentCard';
import { Loading } from '@/components/common';

const ResultsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const ResultsCount = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const ResultsTime = styled.span`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textLight};
`;

const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.textLight};
`;

const EmptyTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const EmptyText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textLight};
`;

interface SearchResultsProps {
  results: Patent[];
  isLoading: boolean;
  searchTime?: number;
  onPatentClick?: (patent: Patent) => void;
}

export const SearchResults = ({ 
  results, 
  isLoading, 
  searchTime,
  onPatentClick 
}: SearchResultsProps) => {
  if (isLoading) {
    return <Loading text="특허를 검색하는 중입니다..." />;
  }

  if (results.length === 0) {
    return (
      <EmptyState>
        <EmptyTitle>검색 결과가 없습니다</EmptyTitle>
        <EmptyText>다른 검색어로 시도해보세요.</EmptyText>
      </EmptyState>
    );
  }

  return (
    <ResultsContainer>
      <ResultsHeader>
        <ResultsCount>{results.length}개의 특허 검색됨</ResultsCount>
        {searchTime && (
          <ResultsTime>검색 시간: {searchTime.toFixed(2)}초</ResultsTime>
        )}
      </ResultsHeader>
      <ResultsList>
        {results.map((patent) => (
          <PatentCard 
            key={patent.id} 
            patent={patent}
            onClick={() => onPatentClick?.(patent)}
          />
        ))}
      </ResultsList>
    </ResultsContainer>
  );
};


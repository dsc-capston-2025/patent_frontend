import styled from 'styled-components';
import { PatentItem } from '@/types';
import { PatentCard } from './PatentCard';
import { Loading } from '@/components/common';
import { parseMarkdown } from '@/utils/markdownParser';

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

const ChatResponseSection = styled.div`
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary};
    margin-top: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    padding-bottom: ${({ theme }) => theme.spacing.xs};
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.text};
    margin-top: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    line-height: 1.7;
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primary};
  }

  ul, ol {
    margin-left: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

const ChatResponseTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
`;

const ErrorMessage = styled.div`
  background: #fee;
  border: 1px solid #fcc;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: #c00;
  font-size: ${({ theme }) => theme.fontSize.md};
`;

const PatentListTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.lg};
`;

interface SearchResultsProps {
  results: PatentItem[];
  isLoading: boolean;
  searchTime?: number;
  chatResponse?: string;
  apiStatus?: 'success' | 'failed' | null;
  error?: string;
  onPatentClick?: (patent: PatentItem) => void;
}

export const SearchResults = ({ 
  results, 
  isLoading, 
  searchTime,
  chatResponse,
  apiStatus,
  error,
  onPatentClick 
}: SearchResultsProps) => {
  if (isLoading) {
    return <Loading text="AI가 아이디어를 분석하고 유사 특허를 검색하는 중입니다..." />;
  }

  if (error) {
    return (
      <ResultsContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </ResultsContainer>
    );
  }

  return (
    <ResultsContainer>
      {/* AI 응답 표시 */}
      {chatResponse && (
        <>
          <ChatResponseTitle>🤖 AI 특허 전략가 분석</ChatResponseTitle>
          <ChatResponseSection 
            dangerouslySetInnerHTML={{ __html: parseMarkdown(chatResponse) }}
          />
        </>
      )}

      {/* 특허 목록 표시 */}
      {results.length > 0 ? (
        <>
          <PatentListTitle>유사 특허 목록</PatentListTitle>
          <ResultsHeader>
            <ResultsCount>{results.length}개의 유사 특허 발견</ResultsCount>
            {searchTime && (
              <ResultsTime>검색 시간: {searchTime.toFixed(2)}초</ResultsTime>
            )}
          </ResultsHeader>
          <ResultsList>
            {results.map((patent) => (
              <PatentCard 
                key={patent.patentId} 
                patent={patent}
                onClick={() => onPatentClick?.(patent)}
              />
            ))}
          </ResultsList>
        </>
      ) : (
        apiStatus === 'failed' && (
          <EmptyState>
            <EmptyTitle>💡 아이디어를 더 구체화해 주세요</EmptyTitle>
            <EmptyText>AI의 제안을 참고하여 아이디어를 더 상세하게 설명해 주시면 더 정확한 특허 검색이 가능합니다.</EmptyText>
          </EmptyState>
        )
      )}
    </ResultsContainer>
  );
};


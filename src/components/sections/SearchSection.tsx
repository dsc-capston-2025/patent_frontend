import styled from 'styled-components';
import { Search, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/common';

const SearchContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => `80px ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `60px ${theme.spacing.lg}`};
  }
`;

const SearchContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textLight};
  margin: 0 0 ${({ theme }) => theme.spacing.xxl};
`;

const SearchBox = styled.div`
  background: ${({ theme }) => theme.colors.backgroundGray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSize.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  resize: vertical;
  font-family: inherit;
  line-height: 1.6;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const SearchButton = styled(Button)`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-size: ${({ theme }) => theme.fontSize.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ExampleSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ExampleTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.md};
`;

const ExampleTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ExampleTag = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 100px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textLight};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundLight};
    border-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
  }
`;

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

export const SearchSection = ({ onSearch }: SearchSectionProps) => {
  const [query, setQuery] = useState('');

  const examples = [
    '집어서 주머니에 넣을 수 있는 스마트폰 화면',
    'AI가 의료 영상 사진을 보고 질병을 찾아내는 기술',
    '전기차를 더 빨리 충전하는 방법',
  ];

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleExampleClick = (example: string) => {
    setQuery(example);
  };

  return (
    <SearchContainer id="search">
      <SearchContent>
        <SectionTitle>특허 검색</SectionTitle>
        <SectionSubtitle>
          만들고 싶은 것이나 떠오른 아이디어를 편하게 설명해주세요
        </SectionSubtitle>
        
        <SearchBox>
          <TextArea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="예: 스마트폰 배터리가 오래 가도록 AI로 전력을 관리하는 방법"
          />
        </SearchBox>
        
        <SearchButton onClick={handleSearch} disabled={!query.trim()}>
          <Search />
          유사 특허 검색
        </SearchButton>
        
        <ExampleSection>
          <ExampleTitle>이런 식으로 검색할 수 있어요:</ExampleTitle>
          <ExampleTags>
            {examples.map((example, index) => (
              <ExampleTag key={index} onClick={() => handleExampleClick(example)}>
                {example}
              </ExampleTag>
            ))}
          </ExampleTags>
        </ExampleSection>
      </SearchContent>
    </SearchContainer>
  );
};


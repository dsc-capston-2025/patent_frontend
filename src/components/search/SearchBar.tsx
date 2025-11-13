import styled from 'styled-components';
import { Search } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Button, Input } from '@/components/common';

const SearchContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const SearchForm = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const SearchInputWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const SearchIcon = styled(Search)`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textLight};
  width: 20px;
  height: 20px;
`;

const StyledSearchInput = styled(Input)`
  input {
    padding-left: ${({ theme }) => theme.spacing.xxl};
  }
`;

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export const SearchBar = ({ onSearch, isLoading = false }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInputWrapper>
          <SearchIcon />
          <StyledSearchInput
            type="text"
            placeholder="특허 제목, 요약, 출원인 등을 검색하세요..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
          />
        </SearchInputWrapper>
        <Button type="submit" disabled={isLoading || !query.trim()}>
          {isLoading ? '검색 중...' : '검색'}
        </Button>
      </SearchForm>
    </SearchContainer>
  );
};


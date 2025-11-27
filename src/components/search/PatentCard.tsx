import styled from 'styled-components';
import { Calendar, User, FileText, CheckCircle, XCircle } from 'lucide-react';
import { PatentItem } from '@/types';
import { Card, Badge } from '@/components/common';

const StyledPatentCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  line-height: 1.4;
`;

const SimilarityBadge = styled(Badge)`
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textLight};
  
  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const Summary = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin: 0;
  white-space: pre-line;
`;

const PatentId = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textLight};
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  width: fit-content;
`;

const StatusBadge = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  
  ${({ status, theme }) => status === 'success' 
    ? `
      background: #e6f7ed;
      color: #00875a;
    `
    : `
      background: #ffebe6;
      color: #de350b;
    `
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

interface PatentCardProps {
  patent: PatentItem;
  onClick?: () => void;
}

export const PatentCard = ({ patent, onClick }: PatentCardProps) => {
  // relevanceScore는 "0.35" 형식의 문자열이므로 숫자로 변환 후 100을 곱해서 퍼센트로 표시
  const relevancePercent = Math.round(parseFloat(patent.relevanceScore) * 100);
  
  const getSimilarityVariant = (score: number) => {
    if (score >= 80) return 'danger';  // 높은 유사도는 위험(red)
    if (score >= 60) return 'warning';
    if (score >= 40) return 'info';
    return 'success';  // 낮은 유사도는 안전(green)
  };

  // 날짜 포맷팅 (YYYYMMDD -> YYYY.MM.DD)
  const formatDate = (date: string) => {
    if (date.length === 8) {
      return `${date.slice(0, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`;
    }
    return date;
  };

  return (
    <StyledPatentCard hoverable onClick={onClick}>
      <CardHeader>
        <Title>{patent.title}</Title>
        <SimilarityBadge variant={getSimilarityVariant(relevancePercent)}>
          유사도: {relevancePercent}%
        </SimilarityBadge>
      </CardHeader>
      
      <InfoGrid>
        <InfoItem>
          <User />
          <span>{patent.applicant}</span>
        </InfoItem>
        <InfoItem>
          <Calendar />
          <span>출원일: {formatDate(patent.applicationDate)}</span>
        </InfoItem>
        <InfoItem>
          <FileText />
          <span>출원번호: {patent.patentId}</span>
        </InfoItem>
        <StatusBadge status={patent.matchstatus}>
          {patent.matchstatus === 'success' ? (
            <>
              <CheckCircle />
              <span>매칭 성공</span>
            </>
          ) : (
            <>
              <XCircle />
              <span>매칭 실패</span>
            </>
          )}
        </StatusBadge>
      </InfoGrid>
      
      <Summary>{patent.summary}</Summary>
      
      <PatentId>
        특허 ID: {patent.patentId}
      </PatentId>
    </StyledPatentCard>
  );
};


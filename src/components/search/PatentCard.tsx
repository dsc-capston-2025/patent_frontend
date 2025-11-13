import styled from 'styled-components';
import { Calendar, User, FileText, Award } from 'lucide-react';
import { Patent } from '@/types';
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

const Abstract = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin: 0;
`;

const PatentNumbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.textLight};
`;

const PatentNumber = styled.span`
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

interface PatentCardProps {
  patent: Patent;
  onClick?: () => void;
}

export const PatentCard = ({ patent, onClick }: PatentCardProps) => {
  const getSimilarityVariant = (score?: number) => {
    if (!score) return 'primary';
    if (score >= 90) return 'success';
    if (score >= 80) return 'info';
    if (score >= 70) return 'warning';
    return 'danger';
  };

  return (
    <StyledPatentCard hoverable onClick={onClick}>
      <CardHeader>
        <Title>{patent.title}</Title>
        {patent.similarityScore && (
          <SimilarityBadge variant={getSimilarityVariant(patent.similarityScore)}>
            유사도: {patent.similarityScore}%
          </SimilarityBadge>
        )}
      </CardHeader>
      
      <InfoGrid>
        <InfoItem>
          <User />
          <span>{patent.applicant}</span>
        </InfoItem>
        <InfoItem>
          <Calendar />
          <span>출원일: {patent.applicationDate}</span>
        </InfoItem>
        <InfoItem>
          <FileText />
          <span>{patent.ipcCode}</span>
        </InfoItem>
        <InfoItem>
          <Award />
          <span>{patent.inventor}</span>
        </InfoItem>
      </InfoGrid>
      
      <Abstract>{patent.abstract}</Abstract>
      
      <PatentNumbers>
        <PatentNumber>출원번호: {patent.applicationNumber}</PatentNumber>
        <PatentNumber>공개번호: {patent.publicationNumber}</PatentNumber>
      </PatentNumbers>
    </StyledPatentCard>
  );
};


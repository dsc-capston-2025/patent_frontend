import styled from 'styled-components';
import { Calendar, User, ExternalLink } from 'lucide-react';
import { PatentItem } from '@/types';
import { Card } from '@/components/common';

/* 배지 공통 스타일 */
const BADGE_BORDER_RADIUS = '9999px'; /* 완전히 둥근 pill 형태 */
const BADGE_PADDING = '6px 14px';
const BADGE_FONT_SIZE = '16px';
const BADGE_FONT_WEIGHT = '600';

/* 출원번호 배지 */
const PatentIdBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${BADGE_PADDING};
  border-radius: ${BADGE_BORDER_RADIUS};
  font-size: ${BADGE_FONT_SIZE};
  font-weight: ${BADGE_FONT_WEIGHT};
  line-height: 1;
  background: #ffffff;
  color: #000000;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
`;

/* 유사도 배지 - 출원번호 배지와 동일한 크기 */
const SimilarityBadge = styled.span<{ variant: string }>`
  display: inline-flex;
  align-items: center;
  padding: ${BADGE_PADDING};
  border-radius: ${BADGE_BORDER_RADIUS};
  font-size: ${BADGE_FONT_SIZE};
  font-weight: ${BADGE_FONT_WEIGHT};
  line-height: 1;
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'success':
        return `
          background: ${theme.colors.success}20;
          color: ${theme.colors.success};
        `;
      case 'warning':
        return `
          background: ${theme.colors.warning}20;
          color: ${theme.colors.warning};
        `;
      case 'danger':
        return `
          background: ${theme.colors.danger}20;
          color: ${theme.colors.danger};
        `;
      case 'info':
        return `
          background: ${theme.colors.info}20;
          color: ${theme.colors.info};
        `;
      default:
        return `
          background: ${theme.colors.primary}20;
          color: ${theme.colors.primary};
        `;
    }
  }}
`;

const StyledPatentCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: ${({ theme }) => theme.spacing.sm} 0 0 0;
  line-height: 1.4;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textLight};

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const Summary = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin: 0;
  white-space: pre-line;
`;

/* ──────────────────────────────────────────── */
/* Footer 영역 */
/* ──────────────────────────────────────────── */

const CardFooter = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DetailLinkButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  width: 100%;
  transition: all 0.15s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundLight};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

/* ──────────────────────────────────────────── */
/* URL 생성 */
/* ──────────────────────────────────────────── */

const buildPatentUrl = (patentId: string) => {
    return `https://doi.org/10.8080/${patentId}`;
};

interface PatentCardProps {
    patent: PatentItem;
    onClick?: () => void;
}

export const PatentCard = ({ patent, onClick }: PatentCardProps) => {
    const relevancePercent = Math.round(parseFloat(patent.relevanceScore) * 100);

    const getSimilarityVariant = (score: number) => {
        if (score >= 80) return 'danger';
        if (score >= 60) return 'warning';
        if (score >= 40) return 'info';
        return 'success';
    };

    const formatDate = (date: string) => {
        if (date.length === 8) {
            return `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;
        }
        return date;
    };

    const formatPatentId = (id: string) => {
        if (id.startsWith("KR-10-")) return id;
        const numbers = id.replace(/\D/g, "");
        if (numbers.length >= 9) {
            return `KR-10-${numbers.slice(0, 4)}-${numbers.slice(4)}`;
        }
        return id;
    };

    return (
        <StyledPatentCard hoverable={!!onClick}>
            <TopHeader>
                <PatentIdBadge>
                    {formatPatentId(patent.patentId)}
                </PatentIdBadge>

                <SimilarityBadge variant={getSimilarityVariant(relevancePercent)}>
                    {relevancePercent}% 유사
                </SimilarityBadge>
            </TopHeader>

            <Title>{patent.title}</Title>

            <InfoRow>
                <InfoItem>
                    <User />
                    <span>{patent.applicant}</span>
                </InfoItem>
                <InfoItem>
                    <Calendar />
                    <span>{formatDate(patent.applicationDate)}</span>
                </InfoItem>
            </InfoRow>

            <Summary>{patent.summary}</Summary>

            <CardFooter>
                <DetailLinkButton
                    onClick={(e) => {
                        e.stopPropagation();
                        window.open(buildPatentUrl(patent.patentId), "_blank", "noopener,noreferrer");
                    }}
                >
                    자세히 보기
                    <ExternalLink />
                </DetailLinkButton>
            </CardFooter>
        </StyledPatentCard>
    );
};

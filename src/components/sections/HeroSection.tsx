import styled from 'styled-components';
import { Sparkles, Target, Zap, BarChart3 } from 'lucide-react';
import { Button } from '@/components/common';

const HeroContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.backgroundGray};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
  }
`;

const HeroContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: 100px;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 36px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }
`;

const CTAButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xxl}`};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 900px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

interface HeroSectionProps {
  onStartSearch: () => void;
}

export const HeroSection = ({ onStartSearch }: HeroSectionProps) => {
  return (
    <HeroContainer>
      <HeroContent>
        <Badge>
          <Sparkles />
          <span>AI가 도와드리는 특허 검색</span>
        </Badge>
        
        <Title>생각을 말하면, AI가 특허를 찾아드려요</Title>
        
        <Subtitle>
          아이디어를 일상 언어로 설명만 하세요.<br />
          AI가 똑똑하게 이해하고 비슷한 특허를 찾아드립니다
        </Subtitle>
        
        <CTAButton size="lg" onClick={onStartSearch}>
          특허 검색 시작하기
        </CTAButton>
        
        <FeaturesGrid>
          <FeatureCard>
            <IconWrapper>
              <Target />
            </IconWrapper>
            <FeatureTitle>정확하게 찾아요</FeatureTitle>
          </FeatureCard>
          
          <FeatureCard>
            <IconWrapper>
              <Zap />
            </IconWrapper>
            <FeatureTitle>순식간에 찾아요</FeatureTitle>
          </FeatureCard>
          
          <FeatureCard>
            <IconWrapper>
              <BarChart3 />
            </IconWrapper>
            <FeatureTitle>얼마나 비슷한지 보여줘요</FeatureTitle>
          </FeatureCard>
        </FeaturesGrid>
      </HeroContent>
    </HeroContainer>
  );
};


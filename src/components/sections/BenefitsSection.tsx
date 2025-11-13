import styled from 'styled-components';
import { Brain, Database, Target, Zap, Sparkles, Shield } from 'lucide-react';

const BenefitsContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => `80px ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.backgroundGray};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `60px ${theme.spacing.lg}`};
  }
`;

const BenefitsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin: 0 0 ${({ theme }) => theme.spacing.xxl};
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: ${({ theme }) => theme.colors.iconBg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.md};
`;

const BenefitDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
`;

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: '똑똑한 AI가 이해해요',
      description: '평소 말하듯이 설명하면 AI가 정확히 의미를 파악해요',
    },
    {
      icon: Database,
      title: '의미로 검색해요',
      description: '같은 단어가 없어도 비슷한 내용이면 찾아드려요',
    },
    {
      icon: Target,
      title: '정말 필요한 것만',
      description: '관련 없는 결과는 걸러내고 꼭 필요한 특허만 보여드려요',
    },
    {
      icon: Zap,
      title: '기다릴 필요 없어요',
      description: '수많은 특허 중에서 순식간에 찾아드려요',
    },
    {
      icon: Sparkles,
      title: '쉽게 훑어서 설명해요',
      description: '어려운 특허 문서를 누구나 이해할 수 있게 요약해드려요',
    },
    {
      icon: Shield,
      title: '특허 가능성을 확인해요',
      description: '내 아이디어가 새로운 건지 빠르게 알 수 있어요',
    },
  ];

  return (
    <BenefitsContainer id="features">
      <BenefitsContent>
        <SectionTitle>이런 점이 좋아요</SectionTitle>
        <SectionSubtitle>
          최신 AI 기술로 누구나 쉽게 특허를 검색할 수 있어요
        </SectionSubtitle>
        
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <IconWrapper>
                <benefit.icon />
              </IconWrapper>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsContent>
    </BenefitsContainer>
  );
};


import styled from 'styled-components';
import { Lightbulb, GraduationCap, Building2 } from 'lucide-react';

const UseCasesContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => `80px ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.backgroundGray};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `60px ${theme.spacing.lg}`};
  }
`;

const UseCasesContent = styled.div`
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

const UseCasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`;

const UseCaseCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xxl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.iconBg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  svg {
    width: 32px;
    height: 32px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const UseCaseTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
`;

const UseCaseDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const BenefitItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textLight};
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
  }
`;

export const UseCasesSection = () => {
  const useCases = [
    {
      icon: Lightbulb,
      title: '창업을 준비하시나요?',
      description: '내 아이디어로 특허를 낼 수 있는지, 이미 비슷한 게 있는지 확인해보세요',
      benefits: [
        '아이디어가 새로운지 확인',
        '특허 내기 전 조사',
        '경쟁사 기술 살펴보기',
      ],
    },
    {
      icon: GraduationCap,
      title: '연구를 하시나요?',
      description: '내 연구 주제가 이미 연구된 건 아닌지, 어떤 연구들이 있는지 찾아보세요',
      benefits: [
        '비슷한 연구 찾기',
        '기술 트렌드 파악하기',
        '연구 방향 정하기',
      ],
    },
    {
      icon: Building2,
      title: '기업에서 개발하시나요?',
      description: '새로운 기술을 개발하거나 특허 전략을 세울 때 활용해보세요',
      benefits: [
        '개발 방향 정하기',
        '특허 문제 피하기',
        '지적재산 전략 세우기',
      ],
    },
  ];

  return (
    <UseCasesContainer id="use-cases">
      <UseCasesContent>
        <SectionTitle>누가 사용하면 좋을까요?</SectionTitle>
        <SectionSubtitle>
          이런 분들이 유용하게 사용하실 수 있어요
        </SectionSubtitle>
        
        <UseCasesGrid>
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index}>
              <IconWrapper>
                <useCase.icon />
              </IconWrapper>
              <UseCaseTitle>{useCase.title}</UseCaseTitle>
              <UseCaseDescription>{useCase.description}</UseCaseDescription>
              <BenefitsList>
                {useCase.benefits.map((benefit, idx) => (
                  <BenefitItem key={idx}>{benefit}</BenefitItem>
                ))}
              </BenefitsList>
            </UseCaseCard>
          ))}
        </UseCasesGrid>
      </UseCasesContent>
    </UseCasesContainer>
  );
};


import styled from 'styled-components';
import { MessageSquare, Search, FileText, CheckCircle } from 'lucide-react';

const HowItWorksContainer = styled.section`
  width: 100%;
  padding: ${({ theme }) => `80px ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `60px ${theme.spacing.lg}`};
  }
`;

const HowItWorksContent = styled.div`
  max-width: 1280px;
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

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  
  svg {
    width: 36px;
    height: 36px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StepNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: 1px;
`;

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.md};
`;

const StepDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
`;

export const HowItWorksSection = () => {
  const steps = [
    {
      number: 'STEP 1',
      icon: MessageSquare,
      title: '아이디어 말하기',
      description: '떠오른 아이디어를 평소 말하듯이 편하게 적어주세요',
    },
    {
      number: 'STEP 2',
      icon: Search,
      title: 'AI가 이해하기',
      description: 'AI가 내용을 꼼꼼히 읽고 무슨 뜻인지 파악해요',
    },
    {
      number: 'STEP 3',
      icon: FileText,
      title: '비슷한 특허 찾기',
      description: '수많은 특허 중에서 비슷한 것들을 쏙쏙 골라내요',
    },
    {
      number: 'STEP 4',
      icon: CheckCircle,
      title: '결과 보여주기',
      description: '중요한 내용만 쉽게 정리해서 보여드려요',
    },
  ];

  return (
    <HowItWorksContainer id="how-it-works">
      <HowItWorksContent>
        <SectionTitle>어떻게 작동하나요?</SectionTitle>
        <SectionSubtitle>
          간단한 4단계로 비슷한 특허를 찾아드려요
        </SectionSubtitle>
        
        <StepsGrid>
          {steps.map((step, index) => (
            <StepCard key={index}>
              <IconCircle>
                <step.icon />
              </IconCircle>
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </StepCard>
          ))}
        </StepsGrid>
      </HowItWorksContent>
    </HowItWorksContainer>
  );
};


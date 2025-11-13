import styled from 'styled-components';
import { FileSearch } from 'lucide-react';

const FooterContainer = styled.footer`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const FooterDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.6;
  margin: 0;
`;

const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.md};
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const FooterLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Copyright = styled.div`
  max-width: 1280px;
  margin: ${({ theme }) => theme.spacing.xl} auto 0;
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo>
            <FileSearch />
            <span>PatentSearch AI</span>
          </Logo>
          <FooterDescription>
            AI로 누구나 쉽게 특허를 검색하는 서비스
          </FooterDescription>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>주요 기능</FooterTitle>
          <FooterLinks>
            <FooterLink href="#search">특허 검색</FooterLink>
            <FooterLink href="#features">비슷한 정도 분석</FooterLink>
            <FooterLink href="#how-it-works">쉬운 요약</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>도움말</FooterTitle>
          <FooterLinks>
            <FooterLink href="#use-cases">서비스 소개</FooterLink>
            <FooterLink href="#how-it-works">사용 방법</FooterLink>
            <FooterLink href="#features">문의하기</FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © 2025 PatentSearch AI. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

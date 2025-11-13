import styled from 'styled-components';
import { FileSearch, Github } from 'lucide-react';

const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.xl}`};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.lg};
  cursor: pointer;
`;

const LogoIcon = styled(FileSearch)`
  width: 24px;
  height: 24px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  transition: color ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <LogoIcon />
          <span>PatentSearch AI</span>
        </Logo>
        <Nav>
          <NavLink onClick={() => scrollToSection('features')}>기능</NavLink>
          <NavLink onClick={() => scrollToSection('how-it-works')}>작동 원리</NavLink>
          <NavLink onClick={() => scrollToSection('use-cases')}>활용 사례</NavLink>
          <GitHubLink href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github />
            <span>GitHub</span>
          </GitHubLink>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

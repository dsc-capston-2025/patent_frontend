import styled from 'styled-components';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  padding?: 'sm' | 'md' | 'lg';
  hoverable?: boolean;
  className?: string;
}

const StyledCard = styled.div<{ padding: string; hoverable: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  ${({ padding, theme }) => {
    switch (padding) {
      case 'sm':
        return `padding: ${theme.spacing.md};`;
      case 'lg':
        return `padding: ${theme.spacing.xl};`;
      default:
        return `padding: ${theme.spacing.lg};`;
    }
  }}
  
  ${({ hoverable, theme }) => hoverable && `
    cursor: pointer;
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.lg};
    }
  `}
`;

export const Card = ({ 
  children, 
  padding = 'md', 
  hoverable = false,
  className 
}: CardProps) => {
  return (
    <StyledCard padding={padding} hoverable={hoverable} className={className}>
      {children}
    </StyledCard>
  );
};


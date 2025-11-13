import styled from 'styled-components';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
}

const StyledBadge = styled.span<{ variant: string }>`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  
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

export const Badge = ({ children, variant = 'primary' }: BadgeProps) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>;
};


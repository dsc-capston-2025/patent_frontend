import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xxl};
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid ${({ theme }) => theme.colors.backgroundLight};
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  animation: ${spin} 0.8s linear infinite;
`;

const LoadingText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textLight};
`;

interface LoadingProps {
  text?: string;
}

export const Loading = ({ text = '로딩 중...' }: LoadingProps) => {
  return (
    <LoadingWrapper>
      <Spinner />
      <LoadingText>{text}</LoadingText>
    </LoadingWrapper>
  );
};


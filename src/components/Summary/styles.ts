import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;
interface SummaryCardProps {
  variant?: "green";
}
export const SummaryCard = styled.div<SummaryCardProps>`
  // using the interface to define the props
  background: ${({ theme }) => theme["gray-600"]};
  border-radius: 0.25rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between; // space between the icon and the title
    color: ${({ theme }) => theme["gray-300"]};
  }
  strong {
    display: block; // to make the strong element to be a block element
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${({ variant }) =>
    variant === "green" &&
    css`
      background: ${({ theme }) => theme["green-500"]};
    `}
`;

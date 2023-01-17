import styled from "styled-components";

export const Container = styled.div``;
export const TransactionContainer = styled.main`
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 2rem;

  td {
    padding: 1rem 2rem;
    background: ${({ theme }) => theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    &:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
`;

interface PriceStyleProps {
  variant?: "income" | "outcome";
}

export const PriceStyle = styled.span<PriceStyleProps>`
  color: ${({ variant, theme }) =>
    variant === "income" ? theme["green-300"] : theme["red-300"]};
`;

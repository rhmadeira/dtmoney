import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewTransictionButoon = styled.button`
  height: 3rem;
  border: 0;
  background: ${({ theme }) => theme["green-500"]};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  padding: 0 2rem;
  border-radius: 0.25rem;
  transition: filter 0.2s;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }
`;

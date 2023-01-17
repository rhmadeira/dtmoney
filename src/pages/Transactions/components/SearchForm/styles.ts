import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 0.25rem;
    border: 0;
    background: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme["green-300"]};
    font-weight: bold;
    border-radius: 0.25rem;
    transition: all 0.2s;

    &:hover {
      background: ${({ theme }) => theme["green-500"]};
      border-color: 1px solid ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme.white};
    }
  }
`;

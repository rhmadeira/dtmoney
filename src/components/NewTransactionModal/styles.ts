import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0; // top, right, bottom, left
  background-color: rgba(0, 0, 0, 0.5); // black with 50% opacity
`;
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 0.5rem;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme["gray-800"]};

  position: fixed;
  top: 50%; // center the modal
  left: 50%; // center the modal
  transform: translate(-50%, -50%); // center the modal

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 0.25rem;
      border: 0;
      background: ${({ theme }) => theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }
    button[type="submit"] {
      height: 3rem;
      border: 0;
      background: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["gray-100"]};
      font-weight: bold;
      padding: 0 1.2rem;
      border-radius: 0.25rem;
      transition: filter 0.3s;
      margin-top: 1.5rem;
      cursor: pointer;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem; // 1.5rem from the top
  right: 1.5rem; // 1.5rem from the right
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const ContainerTransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: "income" | "outcome";
}

export const TransactionButtonType = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme["gray-700"]};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme["gray-300"]};

  svg {
    color: ${({ theme, variant }) =>
      variant === "income" ? theme["green-500"] : theme["red-500"]};
  }

  &[data-state="unchecked"] {
    &:hover {
      filter: brightness(0.9);
    }
  }

  &[data-state="checked"] {
    color: ${({theme})=> theme["gray-100"]};
    background: ${({theme, variant}) => variant === "income" ? theme["green-500"] : theme["red-300"]};

    svg {
      color: ${({theme})=> theme["gray-100"]};
    }
  }
`;

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  CloseButton,
  ContainerTransactionType,
  Content,
  Overlay,
  TransactionButtonType,
} from "./styles";

export default function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />

          <ContainerTransactionType>
            <TransactionButtonType type="button" variat="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionButtonType>
            <TransactionButtonType type="button" variat="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionButtonType>
          </ContainerTransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}

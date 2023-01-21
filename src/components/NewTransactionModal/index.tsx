import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';
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
            {/* por se tratar de um radio value é obrigatório */}
            <TransactionButtonType type="button" variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionButtonType>
            <TransactionButtonType type="button" variant="outcome" value="outcome">
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

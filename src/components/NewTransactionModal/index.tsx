import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import {
  CloseButton,
  ContainerTransactionType,
  Content,
  Overlay,
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

          <ContainerTransactionType></ContainerTransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}

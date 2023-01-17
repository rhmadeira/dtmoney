import { HeaderContainer, HeaderContent, NewTransictionButoon } from "./styles";
import logoImg from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import NewTransactionModal from "../NewTransactionModal";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="dt money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            {/* // asChild is a prop that allows you to use the component as a child */}
            <NewTransictionButoon>Nova transação</NewTransictionButoon>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}

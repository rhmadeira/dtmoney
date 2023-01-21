import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import {
  CloseButton,
  ContainerTransactionType,
  Content,
  Overlay,
  TransactionButtonType,
} from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const newTransactionModalSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  // type: zod.enum(["income", "outcome"]),
});

type NewTransactionFormProps = zod.infer<typeof newTransactionModalSchema>;

export default function NewTransactionModal() {
  const { register, handleSubmit, formState } =
    useForm<NewTransactionFormProps>({
      resolver: zodResolver(newTransactionModalSchema),
    });
  async function handleCreateNewTransaction(data: NewTransactionFormProps) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            {...register("description")}
            type="text"
            placeholder="Descrição"
            required
          />
          <input
            {...register("price", { valueAsNumber: true })} // valueAsNumber: true -> converte o valor para number
            type="number"
            placeholder="Preço"
          />
          <input
            {...register("category")}
            type="text"
            placeholder="Categoria"
          />

          <ContainerTransactionType>
            {/* por se tratar de um radio value é obrigatório */}
            <TransactionButtonType
              type="button"
              variant="income"
              value="income"
            >
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionButtonType>
            <TransactionButtonType
              type="button"
              variant="outcome"
              value="outcome"
            >
              <ArrowCircleDown size={24} />
              Saída
            </TransactionButtonType>
          </ContainerTransactionType>

          <button type="submit" disabled={formState.isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}

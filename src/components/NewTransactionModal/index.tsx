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
import { Controller } from "react-hook-form";
import { api } from "../../lib/axios";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/Transactions";

const newTransactionModalSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"]), // enum: lista de valores permitidos
});

type NewTransactionFormProps = zod.infer<typeof newTransactionModalSchema>;

export default function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext);
  const { register, handleSubmit, formState, control, reset } =
    useForm<NewTransactionFormProps>({
      resolver: zodResolver(newTransactionModalSchema),
      defaultValues: {
        type: "income",
      },
    });

  async function handleCreateNewTransaction(data: NewTransactionFormProps) {
    const { description, price, category, type } = data;
    createTransaction({
      description,
      price,
      category,
      type,
    });
    reset();
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
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <ContainerTransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
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
              );
            }}
          />

          <button type="submit" disabled={formState.isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}

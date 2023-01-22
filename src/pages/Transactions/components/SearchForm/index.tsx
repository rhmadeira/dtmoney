import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../contexts/Transactions";

const searchFormSchema = zod.object({
  query: zod.string().min(3).max(100),
});

type SearchFormProps = zod.infer<typeof searchFormSchema>; // reurn type of the schema

export default function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext);
  const { register, handleSubmit, formState } = useForm<SearchFormProps>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransaction(data: SearchFormProps) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        {...register("query")}
        type="text"
        placeholder="Busque por sua transação"
      />
      <button type="submit" disabled={formState.isSubmitting}>
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
}

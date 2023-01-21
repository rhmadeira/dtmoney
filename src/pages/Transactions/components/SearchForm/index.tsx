import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = zod.object({
  query: zod.string().min(3).max(100),
});

type SearchFormProps = zod.infer<typeof searchFormSchema>; // reurn type of the schema

export default function SearchForm() {
  const { register, handleSubmit, formState } = useForm<SearchFormProps>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchTransaction(data: SearchFormProps) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data, formState.isSubmitting);
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

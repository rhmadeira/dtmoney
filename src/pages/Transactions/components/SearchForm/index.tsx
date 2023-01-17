import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export default function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por sua transação" />
      <button type="submit">
        <MagnifyingGlass size={20} /> Buscar
      </button>
    </SearchFormContainer>
  );
}

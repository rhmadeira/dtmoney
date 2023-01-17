import Header from "../../components/Header";
import Summary from "../../components/Summary";
import SearchForm from "./components/SearchForm";
import {
  Container,
  PriceStyle,
  TransactionContainer,
  TransactionTable,
} from "./styles";

export default function Transactions() {
  return (
    <Container>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceStyle variant="income">R$ 12.000,00</PriceStyle>
              </td>
              <td>Venda</td>
              <td>15/01/2023</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceStyle variant="outcome">R$ -59,00</PriceStyle>
              </td>
              <td>Alimentação</td>
              <td>15/01/2023</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </Container>
  );
}

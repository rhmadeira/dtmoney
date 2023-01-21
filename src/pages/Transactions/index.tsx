import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Summary from "../../components/Summary";
import { TransactionsContext } from "../../contexts/Transactions";
import SearchForm from "./components/SearchForm";
import {
  Container,
  PriceStyle,
  TransactionContainer,
  TransactionTable,
} from "./styles";

export default function Transactions() {
  const {transactions} = useContext(TransactionsContext);

  return (
    <Container>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions?.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td><PriceStyle variant={transaction.type}>{transaction.price}</PriceStyle></td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </Container>
  );
}

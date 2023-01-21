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
import { priceFormater, dateFormater } from "../../utils/Formatter";

export default function Transactions() {
  const { transactions } = useContext(TransactionsContext);

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
                <td>
                  <PriceStyle variant={transaction.type}>
                    {transaction.type === "outcome" ? "- " : ""}
                    {priceFormater.format(transaction.price)}
                  </PriceStyle>
                </td>
                <td>{transaction.category}</td>
                {/* A data vem como string e precisa ser convertida para Date */}
                <td>{dateFormater.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </Container>
  );
}

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Summary from "../../components/Summary";
import SearchForm from "./components/SearchForm";
import {
  Container,
  PriceStyle,
  TransactionContainer,
  TransactionTable,
} from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

export default function Transactions() {
const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(()=>{
    async function loadTransactions(){
      const response = await fetch('http://localhost:3000/transactions');
      const data = await response.json();
      setTransactions(data);
    }
    loadTransactions();
  }, [])

  return (
    <Container>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
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

import React from "react";
import "./App.css";
import { Balance } from "./Component/Balance";
import { Header } from "./Component/Head er";
import { IncomeExpenses } from "./Component/IncomeExpenses";
import { TransactionList } from "./Component/TransactionList";
import { AddTransaction } from "./Component/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

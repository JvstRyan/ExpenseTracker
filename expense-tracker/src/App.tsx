import { useState } from "react";
import ExpenseForm from "./components/ExpenseCreation/ExpenseForm";
import ExpensesList from "./components/ExpenseDisplay/ExpensesList";
import { Box, Container, Flex, Grid, SimpleGrid, Spacer } from "@chakra-ui/react";

export interface ExpenseData {
  title: string;
  amount: number;
  date: Date;
  id: string;
}

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e5",
    title: "McDonalds BigMac",
    amount: 20.95,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState<ExpenseData[]>(DUMMY_EXPENSES);

  const addExpenseHandler = (expense: ExpenseData) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} justifyContent={'center'} alignItems={'center'} padding={10} spacing={'50px'}>
      <Box alignSelf={'start'}>
      <ExpenseForm onSaveExpenseData={addExpenseHandler} />
      </Box>
      <ExpensesList expenses={expenses} />
      </SimpleGrid>
    </>
  );
}

export default App;

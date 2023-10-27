import { useState } from "react";
import ExpenseForm from "./components/ExpenseCreation/ExpenseForm";
import ExpensesList from "./components/ExpenseDisplay/ExpensesList";
import ExpenseChart from "./components/ExpenseDisplay/ExpenseChart";
import ExpenseFilter from "./components/ExpenseDisplay/ExpenseFilter";
import { Flex, SimpleGrid} from "@chakra-ui/react";
import DUMMY_EXPENSES from "./components/data/DummyData";

export interface ExpenseData {
  title: string;
  amount: number;
  date: Date;
  id: string;
}


function App() {
  const [expenses, setExpenses] = useState<ExpenseData[]>(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState("2023");

  const addExpenseHandler = (expense: ExpenseData) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  };

  const savedYearDataHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear
  })

  const handleDelete = (id: string) => {
    setExpenses(prevExpenses => {
      return prevExpenses.filter(expense => expense.id !== id)
    })
  }

  return (
    <>
      <SimpleGrid columns={[1, 1, 2]} justifyContent={'center'} alignItems={'center'} padding={10} spacing={'50px'}>
      <Flex flexDirection={'column'} gap={4} alignSelf={'start'}>
      <ExpenseForm onSaveExpenseData={addExpenseHandler} />
      <ExpenseFilter
      selected={filteredYear}
      forwardedYearData={savedYearDataHandler}
       />
       <ExpenseChart expenses={filteredExpenses} />
      </Flex>
      <ExpensesList handleDelete={handleDelete} expenses={filteredExpenses} />
      </SimpleGrid>
    </>
  );
}

export default App;

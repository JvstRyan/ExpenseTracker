import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { ExpenseData } from "../../App";

interface Props {
  onSaveExpenseData: (expenseData: ExpenseData) => void;
}

const ExpenseForm = ({ onSaveExpenseData }: Props) => {
  const [enteredTitle, setEnteredTitle] = useState<string>("");
  const [enteredAmount, setEnteredAmount] = useState<string>("");
  const [enteredDate, setEnteredDate] = useState<string>("");
  const [isValid, setisValid] = useState<boolean>(true);

  const submithandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const ExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      id: crypto.randomUUID(),
    };

    if (enteredTitle.trim().length === 0) {
      return setisValid(false)
    }

   if (enteredAmount.trim().length === 0) {
    return setisValid(false)
   }

   if (enteredDate.trim().length === 0) {
    return setisValid(false)
   }

    onSaveExpenseData(ExpenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <>
      <form onSubmit={submithandler}>
        <FormControl>
        <SimpleGrid columns={[1, 1, 1]}>
            <Box w={"100%"}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={enteredTitle}
                onChange={(event) => { {event.target.value.length > 0 ? setisValid(true) : setisValid(false)} setEnteredTitle(event.target.value)}}
                {...!isValid && {borderColor: 'red.500'}}
              />
            </Box>
            <Box w={"100%"}>
              <FormLabel>Amount</FormLabel>
              <Input
                type="number"
                min={"0.01"}
                step={"0.01"}
                value={enteredAmount}
                onChange={(event) => {{event.target.value.length > 0 ? setisValid(true) : setisValid(false)} setEnteredAmount(event.target.value)}}
              {...!isValid && {borderColor: 'red.500'}}
              />
            </Box>
            <Box w={"100%"}>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={enteredDate}
                min={"2023-01-01"}
                max={"2024-12-31"}
                onChange={(event) => {{event.target.value.length > 0 ? setisValid(true) : setisValid(false)} setEnteredDate(event.target.value)}}
              {...!isValid && {borderColor: 'red.500'}}
              />
            </Box>
           <Button  textColor={'white'} mt={3} minW={"30%"}  bg={"blue.500"} type="submit">
              Submit
            </Button> 
        </SimpleGrid>
        </FormControl>
      </form>
    </>
  );
};
 


export default ExpenseForm;

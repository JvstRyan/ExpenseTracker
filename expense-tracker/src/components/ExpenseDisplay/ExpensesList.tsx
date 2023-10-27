import {Text, UnorderedList } from '@chakra-ui/react'
import { ExpenseData } from '../../App'
import ExpenseItem from './ExpenseItem'

interface Props {
    expenses: ExpenseData[]
    handleDelete: (id: string) => void
}

const ExpensesList = ({expenses, handleDelete}: Props) => {

    if (expenses.length === 0) {
        return <Text>No expenses found</Text>
    }


  return (
    <>
    <UnorderedList listStyleType={'none'}>
    {expenses.map(expense => <ExpenseItem onDelete={handleDelete} id={expense.id} key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
    </UnorderedList>
    </>
  )
}

export default ExpensesList
import {Text, UnorderedList } from '@chakra-ui/react'
import { ExpenseData } from '../../App'
import ExpenseItem from './ExpenseItem'

interface Props {
    expenses: ExpenseData[]
}

const ExpensesList = ({expenses}: Props) => {

    if (expenses.length === 0) {
        return <Text>No expenses found</Text>
    }


  return (
    <>
    <UnorderedList listStyleType={'none'}>
    {expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
    </UnorderedList>
    </>
  )
}

export default ExpensesList
import { Card, Flex, ListItem, Spacer, Text } from '@chakra-ui/react'
import ExpenseDate from './ExpenseDate'


interface Props {
    date: Date
    title: string
    amount: number
}


const ExpenseItem = ({date, title, amount}: Props) => {
  return (
    <>
    <ListItem mb={4}>
    <Card boxShadow={'xl'}>
    <Flex mt={2} gap={5} padding={10}>
        <Text>{title}:</Text>
        <Text fontWeight={'bold'}>${amount}</Text>
        <Spacer />
        <ExpenseDate date={date} />
    </Flex>
    </Card>
    </ListItem>
    </>
  )
}

export default ExpenseItem
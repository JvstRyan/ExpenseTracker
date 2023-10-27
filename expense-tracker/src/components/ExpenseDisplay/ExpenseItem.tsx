import { Card, Flex, ListItem, Spacer, Text, Button } from '@chakra-ui/react'
import ExpenseDate from './ExpenseDate'
import { RxCross2 } from 'react-icons/rx'

interface Props {
    date: Date
    title: string
    amount: number
    id: string
    onDelete: (id: string) => void
}



const ExpenseItem = ({date, title, amount, onDelete, id }: Props) => {
  return (
    <>
    <ListItem mb={4}>
    <Card boxShadow={'xl'}>
    <Flex mt={2} gap={5} padding={10} alignItems={'center'}>
        <Text>{title}:</Text>
        <Text fontWeight={'bold'}>${amount}</Text>
        <Spacer />
        <ExpenseDate date={date} />
        <Button onClick={() => onDelete(id)} border={'none'} bg={'none'} _hover={{bg: 'blue.500', color:'white'}}><RxCross2 /></Button>
    </Flex>
    </Card>
    </ListItem>
    </>
  )
}



export default ExpenseItem
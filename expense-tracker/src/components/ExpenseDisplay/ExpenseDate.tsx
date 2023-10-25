import { Badge, Flex, Text } from '@chakra-ui/react';


interface ExpenseDateProps {
    date: Date
}
const ExpenseDate = ({date}: ExpenseDateProps) => {
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const year = date.getFullYear();


    return(
        <Flex>
            <Badge variant={'subtle'} colorScheme='blue'>{month} / {day} / {year}</Badge>
        </Flex>
    );
}

export default ExpenseDate;
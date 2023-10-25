import { Box, Select } from "@chakra-ui/react"

interface Props {
    selected: string
    forwardedYearData: (selectedYear: string) => void
}


const ExpenseFilter = ({selected, forwardedYearData}: Props) => {

const chosenYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    forwardedYearData(event.target.value)
}


  return (
   <>
   <Box width={'40%'}>
    <Select value={selected} onChange={chosenYear} placeholder='Filter by year'>
       <option value={'2023'}>2023</option>
       <option value={'2022'}>2022</option>
       <option value={'2021'}>2021</option>
    </Select>
    </Box>
   </>
  )
}

export default ExpenseFilter
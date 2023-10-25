import { Box, Flex } from "@chakra-ui/react"


interface Props {
    maxValue: number
    value: number
    label: string
}

const ChartBar = ({maxValue, value, label}: Props) => {

    let barFillHeight = '0%'

    if(maxValue > 0) {
        barFillHeight = Math.round((value / maxValue) * 100) + '%'
    }


  return (
    <>
    <Flex h={'100%'} flexDirection={'column'} alignItems={'center'}>
        <Flex h={'100%'} w={'2rem'}  border={'1px solid #313131'} bg={'white'} overflow={'hidden'} flexDirection={'column'} justifyContent={'flex-end'}>
            <Box bg={'blue.500'} w={'100%'} transition={'all 0.3s ease-out'} style={{height: barFillHeight}}></Box>
        </Flex>
        <Box>{label}</Box>
    </Flex>
    </>
    
  )
}

export default ChartBar
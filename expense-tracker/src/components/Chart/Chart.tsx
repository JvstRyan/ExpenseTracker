import { Flex } from '@chakra-ui/react'
import { DataPoints } from '../ExpenseDisplay/ExpenseChart'
import ChartBar from './ChartBar'

interface Props {
    dataPoints: DataPoints[]
}

const Chart = ({dataPoints}: Props) => {

    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)


  return (
    <>
    <Flex padding={2} bg={'white'} fontWeight={'bold'} justifyContent={'space-around'} height={'10rem'}>
        {dataPoints.map((datapoint) => (
            <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMaximum}
            label={datapoint.label}
            />
        ))}
    </Flex>
    </>
  )
}

export default Chart
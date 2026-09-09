import React, { useContext } from 'react'
import { TimeLineContext } from '../../App'
import PieChartWithPaddingAngle from '../../Component/PieChart'


export const Stat = () => {
  let { timelineCart, setTimelineCart } = useContext(TimeLineContext)
  let statData = [{ name: 'call', value: 0 ,color:"#22c55e" },
                  { name: 'text', value: 0 ,color: "#f59e0b" },
                  { name: 'video', value: 0,color:  "#ef4444" }
                  ]
  timelineCart.forEach(element => 
    {statData.forEach(datapoint => 
      datapoint.name === element.action?
       datapoint.value += 1:
        datapoint.value += 0 
      )
    
  });
  return (
    <>
      <title>KeenKeeper-Stats</title>
      <div className='py-16 px-10 sm:px-20 md:px-30 lg:px-49 bg-[#F8FAFC] space-y-5'>
        <h1 className='font-bold text-4xl text-center md:text-start'>Your Analytics</h1>


        <div className='bg-white p-3 flex items-center justify-center gap-3 rounded-lg border border-gray-300'>

          <PieChartWithPaddingAngle data={statData}></PieChartWithPaddingAngle>
          
        </div>

      </div>
    </>
  )
}

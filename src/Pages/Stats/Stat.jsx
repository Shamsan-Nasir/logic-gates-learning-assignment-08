import React, { useContext } from 'react'

import PieChartWithPaddingAngle from '../../Component/PieChart'
import { TimeLineContext } from '../../Context'
import { useLoaderData } from 'react-router'


export const Stat = () => {
  let { timelineCart, setTimelineCart } = useContext(TimeLineContext)
  let actionData = [{ name: 'call', value: 0, color: "#22c55e" },
  { name: 'text', value: 0, color: "#5A46EC" },
  { name: 'video', value: 0, color: "#00FFFA" }
  ]

  let statusData = [{ name: 'on-track', value: 0, color: "#244D3F" },
  { name: 'overdue', value: 0, color: "#EF4444" },
  { name: 'almost due', value: 0, color: "#EFAD44" }
  ]

  let action = 0
  let status = 0


  timelineCart.forEach(element => {
    actionData.forEach(datapoint => {

      if (datapoint.name === element.action) {
        datapoint.value += 1;
        action += 1;
      } else {
        datapoint.value += 0
      }
    })
  })
    ;

  let allData = useLoaderData()

  allData.forEach(element => {
    statusData.forEach(datapoint => {
      if (datapoint.name === element.status) {
        datapoint.value += 1;
        status += 1;
      } else {
        datapoint.value += 0
      }
    })
  });



  return (
    <>
      <title>KeenKeeper-Stats</title>
      <div className='py-14 px-10 sm:px-20 md:px-30 lg:px-49 bg-[#F8FAFC] space-y-5'>
        <h1 className='font-bold text-4xl text-center md:text-start'>Your Analytics</h1>

        <div className="tabs tabs-lift">
          <input type="radio" name="my_tabs_3" className="tab" aria-label="Interaction Types" />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className='bg-white p-3 flex items-center justify-center gap-3 rounded-lg border border-gray-300'>

              {
                action > 0 ? <PieChartWithPaddingAngle data={actionData}></PieChartWithPaddingAngle>
                  :
                  <div className='flex justify-center items-center w-full p-5 bg-gray-300 rounded-2xl'><div>You Need More Interactions To View This Stat </div></div>

              }
            </div>
          </div>

          <input type="radio" name="my_tabs_3" className="tab" aria-label="Status" defaultChecked />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <div className='bg-white p-3 flex items-center justify-center gap-3 rounded-lg border border-gray-300'>

              {
                status > 0 ? <PieChartWithPaddingAngle data={statusData}></PieChartWithPaddingAngle>
                  :
                  <div className='flex justify-center items-center w-full p-5 bg-gray-300 rounded-2xl'><div>Add more friends to View This Stat </div></div>
              }


            </div>
          </div>


        </div>


      </div>
    </>
  )
}

import React, { use, useEffect, useState } from 'react'
import Panel from '../../../components/Panel'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const WorkoutPage = () => {
  const router = useRouter()
  const workouts = useSelector(state=>state.workouts)
  const [data,setData] = useState()
  const [wId,setWId] = useState("")
  useEffect(()=>{
    setWId(router.query.id);
    console.log(workouts);
    if(router.query.id){
      if(!workouts.find(w=>w.id===router.query.id)) router.push("/404")
      else setData(workouts.find(w=>w.id===router.query.id))
    }
  },[router])
  return (
    <Panel>
      {data&&<div className='bg-gray-100 p-4 rounded-lg'>
        <h1 className='text-2xl text-blue-600 mb-2'>Routine Name: <span className='text-black'>{data.name}</span></h1>
        <h1 className='text-2xl text-blue-600 mb-2'>Routine Description: <span className='text-black'>{data.description}</span></h1>
        <h1 className='text-2xl text-blue-600 mb-2'>Exercises:</h1>
        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-around w-full">
            {data.exercises.map((ex,ind)=><div key={ind} className="w-full sm:w-1/3 h-auto shadow bg-white dark:bg-gray-800 py-4 px-8">
              <h2 className='text-2xl text-blue-600'>{ex.name}</h2>
              <ul>
                <li>Sets:{ex.sets}</li>
                <li>Reps:{ex.reps}</li>
                <li>Type:{ex.type}</li>
                <li>Difficulty:{ex.difficulty}</li>
                <li>Duration:{ex.duration}</li>
              </ul>
            </div>)}
            {/* <div className="w-full sm:w-1/3 h-64 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white dark:bg-gray-800" />
            <div className="w-full sm:w-1/3 h-64 shadow bg-white dark:bg-gray-800" />
            <div className="w-full sm:w-1/3 h-64 rounded-b sm:rounded-b-none shadow bg-white dark:bg-gray-800" /> */}
        </div>
      </div>}
    </Panel>
  )
}

export default WorkoutPage
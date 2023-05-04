import React from 'react'
import Panel from '../../components/Panel'
import WorkoutLists from '../../components/WorkoutLists'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  return (
    <Panel>
        <h1 className="text-3xl text-blue-600 mb-2 font-bold">Actions</h1>
        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full gap-3 flex-col md:flex-row">
            <div className="w-full md:w-1/3 h-64 shadow bg-white dark:bg-gray-800 p-4 flex flex-col items-center justify-between ">
              <h1 className='text-4xl font-sans font-bold text-center'>Add New Workout Routines</h1>
              <button onClick={()=>router.push("/app/workouts/new")} type='button' className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white text-lg px-5 py-3 text-md font-bold">Click to move forward</button>
            </div>
            <div className="w-full md:w-1/3 h-64 shadow bg-white dark:bg-gray-800 p-4 flex flex-col items-center justify-between ">
              <h1 className='text-4xl font-sans font-bold text-center'>View Your Workout Routines</h1>
              <button onClick={()=>router.push("/app/workouts")} type='button' className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white text-lg px-5 py-3 text-md font-bold">Click to move forward</button>
            </div>
        </div>
    </Panel>
  )
}

export default Index
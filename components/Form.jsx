// Importing necessary dependencies
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { addWorkout } from "../redux/workouts"
import { useRouter } from 'next/router';

const Form = () => {
    // Getting required states and functions from the store
    const exercisesState = useSelector((state) => state.exercises)
    const workouts = useSelector((state) => state.workouts)
    const dispatch = useDispatch()
    const router = useRouter()
    
    // Initializing local state variables
    const [rName, setRName] = useState("")
    const [desc, setDesc] = useState("")
    const [activeEx, setActiveEx] = useState(['ex2']);

    // Function to add new exercise
    const addExs = () => {
        let y = [...activeEx]
        y.push("ex"+Array.from({length: 11}, (_, i) => i + 1).find(n => {
            if(!activeEx.includes("ex"+n)){
                return (n)
            }
        }))
        setActiveEx(y)
    }

    // Function to delete exercise
    const delExs = (_,ind) => {
        let y = [...activeEx]
        y.splice(ind,1)
        setActiveEx(y)
    }

    // Function to move exercise up
    const moveUp = (_,ind) => {
        let arr = [...activeEx]
        let temp = arr[ind-1]
        arr[ind-1] = arr[ind]
        arr[ind] = temp
        setActiveEx(arr)
    }

    // Function to move exercise down
    const moveDown = (_,ind) => {
        let arr = [...activeEx]
        let temp = arr[ind+1]
        arr[ind+1] = arr[ind]
        arr[ind] = temp
        setActiveEx(arr)
    }

    // Function to get selected exercises
    const getExercises = () => {
        let x = []
        activeEx.forEach((ex) => {
            x.push(exercisesState.find(ele => ele.id === ex))
        })
        return x;
    }

    // Function to handle form submission
    const submit = (e) => {
        e.preventDefault();
        const maxObj = workouts.reduce((accumulator, current) => {
            return accumulator.id > current.id ? accumulator : current;
          });

        let x = {}
        x['id'] = 'w'+(parseInt(maxObj.id.slice(1))+1)
        x['name'] = rName
        x['description'] = desc
        x['userId'] = "643f9f04dcba0b276b55ce6f"
        x['exercises'] = getExercises()
        dispatch(addWorkout(x))
        router.push("/app/workouts")
    }

    return (
        <>
            {/* The heading of the page */}
            <h1 className="text-3xl text-blue-600 mb-2 font-bold">Add New Routine</h1>
            {/* The form to add a new routine */}
            <form onSubmit={submit} className='bg-gray-100 px-8 py-4 rounded'>
                <div className='flex flex-row items-center justify-between'>
                    {/* Heading for Routine details */}
                    <h1 className='text-xl font-bold'>Routine Details</h1>
                    {/* Button to save the routine */}
                    <button type="submit" disabled={rName===""||desc===""} className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white text-lg px-3 py-1 text-md disabled:bg-slate-400 mt-2">Save Routine</button>
                </div>
                <div className="flex  items-center py-8 flex-wrap gap-y-3">
                    {/* Input fields to add routine name and description */}
                    <div className="flex flex-col md:mr-16 ">
                        {/* Label for routine name */}
                        <label htmlFor="routineName" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2 w-full ">
                            Routine Name
                        </label>
                        {/* Input field for routine name */}
                        <input id="routineName" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow sm:w-64 w-[200px]" value={rName} onChange={(e)=>setRName(e.target.value)} placeholder="Name" />
                    </div>
                    <div className="flex flex-col md:mr-16 w-[65%] ">
                        {/* Label for routine description */}
                        <label htmlFor="description" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2 w-full">
                            Description 
                        </label>
                        {/* Textarea field for routine description */}
                        <textarea id="description" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-100 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" value={desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Description" />
                    </div>
                </div>
                {/* Heading for exercises */}
                <h1 className='text-xl font-bold'>Exercises</h1>
                {/* The list of exercises added to the routine */}
                <div className="flex md:flex-row flex-col items-center py-8 flex-wrap gap-y-3 max-h-96 overflow-y-auto">
                    {/* Map through the activeEx array to display each added exercise */}
                    {activeEx.map((exer,i)=>{
                        return <div key={i} className="flex flex-row flex-wrap md:mr-16 bg-gray-50 border-[1px] border-black px-5 py-2 rounded-lg items-center w-full justify-between gap-2">
                        <div>
                        {/* Label for exercise name */}
                        <label htmlFor="exerciseName" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2 w-full ">
                            Exercise Name
                        </label>
                        {/* select element to select from given range of exercises */}
                    <select onChange={(e)=>{
                        let y = [...activeEx]
                        y[i] = e.target.value
                        setActiveEx(y)
                    }} value={exer} id="exerciseName" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal sm:w-64 w-[150px] h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow" placeholder="Name" >
                    {/* Mapping all exercises */}
                        {exercisesState.map((ex,ind)=><option disabled={activeEx.includes(ex.id)} key={ind} value={ex.id} className='disabled:line-through disabled:bg-slate-300'>{ex.name}</option>)}
                    </select>
                    </div>
                    {/* Showing details related to selected exercise */}
                    <div className='flex flex-row flex-wrap gap-4 capitalize'>
                        <p>Type: {exercisesState.filter(ex=>ex.id===exer)[0].type}</p>
                        <p>Sets: {exercisesState.filter(ex=>ex.id===exer)[0].sets}</p>
                        <p>Reps: {exercisesState.filter(ex=>ex.id===exer)[0].reps}</p>
                        <p>Weight: {exercisesState.filter(ex=>ex.id===exer)[0].weight}</p>
                        <p>Difficulty: {exercisesState.filter(ex=>ex.id===exer)[0].difficulty}</p>
                        <p>Duration: {exercisesState.filter(ex=>ex.id===exer)[0].duration} mins</p>
                    </div>
                    {/* Buttons group used to delete, move up and move down exercises */}
                    <div className='flex flex-wrap justify-between'>
                        <button disabled={i===0} type='button' className='font-bold text-xl disabled:text-gray-400' onClick={(e)=>{moveUp(e,i)}}><ArrowDropUpIcon/></button>
                        <button disabled={i===(activeEx.length-1)} type='button' className='font-bold text-xl disabled:text-gray-400' onClick={(e)=>{moveDown(e,i)}}><ArrowDropDownIcon/></button>
                        <button disabled={activeEx.length===1} type='button' className='text-red-600 font-bold text-xl disabled:text-gray-400' onClick={(e)=>delExs(e,i)}><DeleteIcon/></button>
                    </div>
                </div>
                })}

            </div>
            {/* Button to add more exercises */}
            <button type="button" className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded-md text-white px-3 py-2 text-md disabled:bg-slate-400 mt-2" disabled={activeEx.length===exercisesState.length} onClick={addExs}>Add More Exercises</button>

        </form>
    </>
  )
}

export default Form
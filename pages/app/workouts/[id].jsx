import { useEffect, useState } from 'react'
import Panel from '../../../components/Panel'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Filter from '../../../components/Filter';
import Sort from '../../../components/Sort';
import ShareIcon from '@mui/icons-material/Share';
import * as jose from 'jose'

const WorkoutPage = () => {
  const router = useRouter() // router instance from Next.js router
  const workouts = useSelector(state=>state.workouts) // get the 'workouts' state from the Redux store
  const [data,setData] = useState() // state variable to store workout data
  const [filter,setFilter] = useState({type:[],difficulty:[]}) // state variable to store filter options
  const [sort,setSort] = useState(1) // state variable to store sorting option
  const [exercises,setExercises] = useState() // state variable to store the exercises of the workout
  const [copy,setCopy] = useState(false) // state variable to track whether the link has been copied or not
  useEffect(()=>{
    if(router.query.id){ // check if workout id is available in the URL query
      // if((!workouts.find(w=>w.id===router.query.id))&&(router.query.id.length<4)) router.push("/404")
      // else {
        if(workouts.find(w=>w.id===router.query.id)) setData(workouts.find(w=>w.id===router.query.id)) // if the workout is present in Redux store, set the workout data
        else{try{
          setData(jose.decodeJwt(router.query.id)) // if the workout is not present in Redux store, decode the JWT and set the workout data
        } catch(e){
          router.push("/404") // if the JWT is invalid, redirect to 404 page
        }}
      }
    // }
  },[router])
  useEffect(()=>{
    if(data) {
      const sortMap = {
        'beginner': 0,
        'intermediate': 1,
        'advanced': 2,
        'expert': 3,
      }
      let x = [...data.exercises] // make a copy of the exercises array
    switch(sort){
      case 1:
        setExercises(data.exercises) // set the exercises as they are
        break;
      case 2:
        x.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)) // sort the exercises by name in ascending order
        setExercises(x) // set the sorted exercises
        break;
      case 3:
        x.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0)) // sort the exercises by name in descending order
        setExercises(x) // set the sorted exercises
        break;
      case 4:
        x.sort((a, b) => (sortMap[a.difficulty] - sortMap[b.difficulty])) // sort the exercises by difficulty level in ascending order
        setExercises(x) // set the sorted exercises
        break;
      case 5:
        x.sort((a, b) => (sortMap[b.difficulty] - sortMap[a.difficulty])) // sort the exercises by difficulty level in descending order
        setExercises(x) // set the sorted exercises
        break;
      case 6:
        x.sort((a,b) => (a.duration > b.duration) ? 1 : ((b.duration > a.duration) ? -1 : 0)) // sort the exercises by duration in ascending order
        setExercises(x)
        break;
      case 7:
        x.sort((a,b) => (a.duration < b.duration) ? 1 : ((b.duration < a.duration) ? -1 : 0)) // sort the exercises by duration in descending order
        setExercises(x)
        break;
      default:
        setExercises(data.exercises)
      }
      if(filter.type.length||filter.difficulty.length){
        let y = [...x]
        if(filter.type.length)y=y.filter(ex=>filter.type.includes(ex.type))
        if(filter.difficulty.length)y=y.filter(ex=>filter.difficulty.includes(ex.difficulty))
        setExercises(y)
      }
    }
  },[data,sort,filter])
   // Define the share function which generates a JSON Web Token and copies it to the clipboard
   const share = async () => {
    // Define the secret key for the JSON Web Token
    const secret = new TextEncoder().encode('salt');
    // Define the algorithm used to sign the JSON Web Token
    const alg = 'HS256';
    // Sign the JSON Web Token with the provided data, protected header, and secret key
    const jwt = await new jose.SignJWT(data)
      .setProtectedHeader({ alg })
      .sign(secret);
    // Copy the generated URL to the clipboard
    navigator.clipboard.writeText("https://mathongo-task.vercel.app/app/workouts/" + jwt);
    // Set the copy state to true to display the "Copied!" message
    setCopy(true);
  }
  // Render the WorkoutPage component
  return (
    <Panel>
      {data && (
        <div className='bg-gray-100 p-4 rounded-lg max-h-[80vh] overflow-x-auto'>
          <h1 className='text-2xl font-bold text-blue-600 mb-2'>Routine Name: <span className='text-black font-normal'>{data.name}</span> {copy ? (<span className='text-black font-normal text-[14px]'>Copied!</span>) : (<button type="button" onClick={share}><ShareIcon/></button>)}</h1>
          <h1 className='text-2xl font-bold text-blue-600 mb-2'>Routine Description: <span className='text-black font-normal'>{data.description}</span></h1>
          <h1 className='text-2xl font-bold text-blue-600 mb-2'>Exercises:</h1>
          <div className='flex flex-row flex-wrap items-start justify-items-end mb-2 gap-4'>
            {/* Render the Filter component and pass the filter and setFilter props */}
            <Filter filter ={filter} setFilter={setFilter}/>
            {/* Render the Sort component and pass the sort and setSort props */}
            <Sort sort ={sort} setSort={setSort}/>
          </div>
          <div className="flex flex-wrap sm:flex-no-wrap items-center justify-around w-full max-h-96 overflow-x-auto gap-y-6">
            {/* Render the exercise data as cards */}
            {exercises && exercises.map((ex,ind)=><div key={ind} className="w-full sm:w-1/3 h-auto shadow bg-white dark:bg-gray-800 py-4 px-8">
              <h2 className='text-2xl font-bold text-blue-600'>{ex.name}</h2>
              <ul>
                <li>Sets:{ex.sets}</li>
                <li>Reps:{ex.reps}</li>
                <li>Type:{ex.type}</li>
                <li>Difficulty:{ex.difficulty}</li>
                <li>Duration:{ex.duration}</li>
              </ul>
            </div>)}
          </div>
        </div>
      )}
    </Panel>
  );
}

export default WorkoutPage
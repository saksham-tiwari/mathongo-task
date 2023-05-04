import { useEffect, useState } from 'react'
import Panel from '../../../components/Panel'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Filter from '../../../components/Filter';
import Sort from '../../../components/Sort';
import ShareIcon from '@mui/icons-material/Share';
import jwt from "jsonwebtoken"
import * as jose from 'jose'

const WorkoutPage = () => {
  const router = useRouter()
  const workouts = useSelector(state=>state.workouts)
  const [data,setData] = useState()
  const [filter,setFilter] = useState({type:[],difficulty:[]})
  const [sort,setSort] = useState(1)
  const [exercises,setExercises] = useState()
  const [copy,setCopy] = useState(false)
  useEffect(()=>{
    console.log(workouts);
    if(router.query.id){
      // if((!workouts.find(w=>w.id===router.query.id))&&(router.query.id.length<4)) router.push("/404")
      // else {
        if(workouts.find(w=>w.id===router.query.id)) setData(workouts.find(w=>w.id===router.query.id))
        else{try{
          setData(jose.decodeJwt(router.query.id))
        } catch(e){
          router.push("/404")
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
      let x = [...data.exercises]
    switch(sort){
      case 1:
        setExercises(data.exercises)
        break;
      case 2:
        x.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        setExercises(x)
        break;
      case 3:
        x.sort((a,b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
        setExercises(x)
        break;
      case 4:
        x.sort((a, b) => (sortMap[a.difficulty] - sortMap[b.difficulty]))
        setExercises(x)
        break;
      case 5:
        x.sort((a, b) => (sortMap[b.difficulty] - sortMap[a.difficulty]))
        setExercises(x)
        break;
      case 6:
        x.sort((a,b) => (a.duration > b.duration) ? 1 : ((b.duration > a.duration) ? -1 : 0))
        setExercises(x)
        break;
      case 7:
        x.sort((a,b) => (a.duration < b.duration) ? 1 : ((b.duration < a.duration) ? -1 : 0))
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
  const share = async ()=>{
    const secret = new TextEncoder().encode('salt')
    const alg = 'HS256'
    const jwt = await new jose.SignJWT(data)
      .setProtectedHeader({ alg })
      .sign(secret)
    // console.log(jwt)
    navigator.clipboard.writeText("https://mathongo-task.vercel.app/app/workouts/"+jwt)
    setCopy(true)
  }
  return (
    <Panel>
      {data&&<div className='bg-gray-100 p-4 rounded-lg max-h-[80vh] overflow-x-auto'>
        <h1 className='text-2xl font-bold text-blue-600 mb-2'>Routine Name: <span className='text-black font-normal'>{data.name}</span> {copy?<span className='text-black font-normal text-[14px]'>Copied!</span>:<button type="button" onClick={share}><ShareIcon/></button>}</h1>
        <h1 className='text-2xl font-bold text-blue-600 mb-2'>Routine Description: <span className='text-black font-normal'>{data.description}</span></h1>
          <h1 className='text-2xl font-bold text-blue-600 mb-2'>Exercises:</h1>
        <div className='flex flex-row flex-wrap items-start justify-items-end mb-2 gap-4'>
          <Filter filter ={filter} setFilter={setFilter}/>
          <Sort sort ={sort} setSort={setSort}/>
        </div>
        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-around w-full max-h-96 overflow-x-auto gap-y-6">
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
      </div>}
    </Panel>
  )
}

export default WorkoutPage
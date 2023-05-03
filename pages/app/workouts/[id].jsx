import { useEffect, useState } from 'react'
import Panel from '../../../components/Panel'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Filter from '../../../components/Filter';
import Sort from '../../../components/Sort';


const WorkoutPage = () => {
  const router = useRouter()
  const workouts = useSelector(state=>state.workouts)
  const [data,setData] = useState()
  const [filter,setFilter] = useState({type:[],difficulty:[]})
  const [sort,setSort] = useState(1)
  const [exercises,setExercises] = useState()
  useEffect(()=>{
    console.log(workouts);
    if(router.query.id){
      if(!workouts.find(w=>w.id===router.query.id)) router.push("/404")
      else setData(workouts.find(w=>w.id===router.query.id))
    }
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
  return (
    <Panel>
      {data&&<div className='bg-gray-100 p-4 rounded-lg max-h-[80vh] overflow-x-auto'>
        <h1 className='text-2xl text-blue-600 mb-2'>Routine Name: <span className='text-black'>{data.name}</span></h1>
        <h1 className='text-2xl text-blue-600 mb-2'>Routine Description: <span className='text-black'>{data.description}</span></h1>
          <h1 className='text-2xl text-blue-600 mb-2'>Exercises:</h1>
        <div className='flex flex-row items-start justify-items-end mb-2 gap-4'>
          <Sort sort ={sort} setSort={setSort}/>
          <Filter filter ={filter} setFilter={setFilter}/>
        </div>
        <div className="flex flex-wrap sm:flex-no-wrap items-center justify-around w-full max-h-96 overflow-x-auto gap-y-6">
            {exercises && exercises.map((ex,ind)=><div key={ind} className="w-full sm:w-1/3 h-auto shadow bg-white dark:bg-gray-800 py-4 px-8">
              <h2 className='text-2xl text-blue-600'>{ex.name}</h2>
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
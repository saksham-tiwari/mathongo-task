import { useRouter } from 'next/router';
import PushPinIcon from '@mui/icons-material/PushPin';
import { useDispatch } from 'react-redux';
import { addPin, removePin } from '../redux/pinned';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeWorkout } from '../redux/workouts';

const ListElement = (props) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const getDuration=()=>{
        let ex = props.data.exercises;
        let duration = 0;
        ex.forEach(e => {
            duration+=e.duration
        });
        return duration
    }
    const changePinned = ()=>{
        if(props.pinned.includes(props.data.id)) dispatch(removePin(props.data.id)) 
        else dispatch(addPin(props.data.id))
    }
    const delWork = ()=>{
        dispatch(removeWorkout(props.data.id))
    }
  return (
    <tr className="text-sm leading-none text-gray-600 h-16">
        <td className="w-1/2 cursor-pointer" onClick={()=>router.push(`/app/workouts/${props.data.id}`)}>
            <div className="flex items-center">
                <div className="pl-2">
                    <p className="text-l font-medium leading-none text-gray-800 truncate max-w-lg">{props.data.name}</p>
                    <p className="text-xs leading-3 text-gray-600 mt-2 truncate max-w-lg ">{props.data.description}</p>
                </div> 
            </div>
        </td>
        <td className="pl-16">
            {props.data.exercises.length<=3?(props.data.exercises.map((ex,ind)=><p className="my-1" key={ind}>{ex.name}</p>)):(props.data.exercises.slice(0,3).map((ex,ind)=><p className="my-1" key={ind}>{ex.name}</p>))}
            {props.data.exercises.length<=3?"":"..."}
        </td>
        <td>
            <p className="pl-16">{getDuration()} Minutes</p>
        </td>
        <td>
            <p className="pl-16">{props.data.exercises.length} exercises</p>
        </td>
        <td>
            <button type='button' onClick={changePinned} className={`pl-16 ${!props.pinned.includes(props.data.id)?"text-blue-200":"text-black"}`}><PushPinIcon className='rotate-45'/></button>
            <button type='button' onClick={delWork} className={`pl-4 text-red-600`}><DeleteIcon/></button>
        </td>
    </tr>
  )
}

export default ListElement
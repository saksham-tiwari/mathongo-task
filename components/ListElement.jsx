import React from 'react'

const ListElement = (props) => {
    const getDuration=()=>{
        let ex = props.data.exercises;
        let duration = 0;
        ex.forEach(e => {
            duration+=e.duration
        });
        return duration
    }
  return (
    <tr className="text-sm leading-none text-gray-600 h-16">
        <td className="w-1/2">
            <div className="flex items-center">
                <div className="pl-2">
                    <p className="text-l font-medium leading-none text-gray-800">{props.data.name}</p>
                    <p className="text-xs leading-3 text-gray-600 mt-2">{props.data.description}</p>
                </div>
            </div>
        </td>
        <td className="pl-16">
            {/* {props.data.exercises.map((ex,ind)=><p className="my-1" key={ind}>{ex.name}</p>)} */}
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
            <p className="pl-16">Shared on 21 Februray 2020</p>
        </td>
    </tr>
  )
}

export default ListElement
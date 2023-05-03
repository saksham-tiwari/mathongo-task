import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListElement from "./ListElement";

function WorkoutLists() {
    const workoutsState = useSelector((state)=>state.workouts)
    const pinned = useSelector((state)=>state.pinned)
    const [workouts,setWorkouts] = useState([])
    useEffect(()=>{
        setWorkouts([...workoutsState])
        if(pinned.length){
            let x =[]
            pinned.forEach((pin)=>x.push(workoutsState.find(e=>e.id===pin)))
            workoutsState.forEach((w)=>{
                if(!pinned.includes(w.id)) x.push(w)
            })

            setWorkouts(x)

        }
    },[pinned])
    return (
        <>
            <div className="w-full" >
                <div className="bg-white px-4 md:px-10" >
                    <div className="overflow-x-auto overflow-y-auto max-h-[75vh]" >
                        <table className="w-full whitespace-nowrap">
                            <tbody>
                                {workouts.map((e,i)=><ListElement key={i} data={e} pinned={pinned}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkoutLists;

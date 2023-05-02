import { useEffect } from "react";
import { useSelector } from "react-redux";
import ListElement from "./ListElement";

function WorkoutLists() {
    const workouts = useSelector((state)=>state.workouts)
    useEffect(()=>{
        console.log(workouts);
    },[workouts])
    return (
        <>
            <div className="w-full" >
                <div className="bg-white px-4 md:px-10 pb-5" >
                    <div className="overflow-x-auto overflow-y-auto max-h-96" >
                        <table className="w-full whitespace-nowrap">
                            <tbody>
                                {workouts.map((e,i)=><ListElement key={i} data={e}/>)}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkoutLists;

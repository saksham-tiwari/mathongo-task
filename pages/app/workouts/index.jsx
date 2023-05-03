import Panel from '../../../components/Panel'
import WorkoutLists from '../../../components/WorkoutLists'

const index = () => {
  return (
    <Panel>
        <h1 className="text-3xl text-blue-600 mb-2">Your Workouts</h1>
        <WorkoutLists/>
    </Panel>
  )
}

export default index
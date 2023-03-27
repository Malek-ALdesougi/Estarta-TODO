import * as TASKS_CONSTANTS from './constants'
import { v4 as uuid } from 'uuid';

const initState = {
    tasks: []
}

export const tasksReducder = (state = initState, action) => {

    switch (action.type) {
        case TASKS_CONSTANTS.ADD_TASK:
            // the state is now updating and re-renduring 
            return { ...state, tasks: state.tasks.concat({ id: uuid(), taskName: action.payload, status: false }) }

        case TASKS_CONSTANTS.DONE_TASK:
            const doneTask = state.tasks.findIndex(obj => obj.id == action.payload.id);
            state.tasks[doneTask].status = true;
            return { tasks: state.tasks }

            case TASKS_CONSTANTS.DELETE_TASK:
                const filterdTasks = state.tasks.filter((task) => task.id != action.payload);
                return {tasks : filterdTasks}
        default:
            return state
    }

}
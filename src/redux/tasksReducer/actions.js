import * as TASKS_CONSTANTS from './constants'

export const addNewTask = (taskName) => (dispatch) => {

    dispatch({
        type: TASKS_CONSTANTS.ADD_TASK,
        payload: taskName
    })
}


export const doneTask = (task) => (dispatch) => {
    dispatch({
        type: TASKS_CONSTANTS.DONE_TASK,
        payload: task
    })
}

export const deleteTask = (id) => (dispatch) => {

    dispatch({
        type: TASKS_CONSTANTS.DELETE_TASK,
        payload: id
    })
}

export const changeTaskName = (id, newName) => (dispatch) => {
    dispatch({
        type: TASKS_CONSTANTS.CHANGE_NAME,
        payload: {id, newName}
    })
}


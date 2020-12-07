import * as actionTypes from "./actionTypes";

function addTask(task) {
    return {type: actionTypes.ADD_TASK, payload: task}
}
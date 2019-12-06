import {
  DELETE_TASK,
  ADD_TASK,
  EDITE_TASK,
  COMPLETE_TASK,
  SAVE_MODIFICATION
} from "./actionsType";

export function addTask(payload) {
  return { type: ADD_TASK, payload };
}

export function deleteTask(payload) {
  return { type: DELETE_TASK, payload };
}
export function editerTask(payload, index) {
  return { type: EDITE_TASK, payload, index };
}
export function completeTask(payload) {
  return { type: COMPLETE_TASK, payload };
}

export function saveModification(payload) {
  return { type: SAVE_MODIFICATION, payload };
}

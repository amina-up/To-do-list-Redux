import {
  DELETE_TASK,
  ADD_TASK,
  COMPLETE_TASK,
  EDITE_TASK
} from "../actions/actionsType";

const initialState = [];

const reducerItem = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];

    case DELETE_TASK:
      return state.filter(el => el.key !== action.payload);

    case COMPLETE_TASK:
      return state.map(el =>
        el.key === action.payload ? { ...el, checked: !el.checked } : el
      );

    case EDITE_TASK:
      return state.map(el =>
        el.key === action.payload.key
          ? { ...el, text: action.payload.text }
          : el
      );

    default:
      return state;
  }
};

export default reducerItem;

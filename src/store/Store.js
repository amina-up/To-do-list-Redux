import { createStore } from "redux";
import reducerItem from "../reducers/Reducer";

const store = createStore(
  reducerItem,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

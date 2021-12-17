// import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
// import { postsReducer } from "./posts";

const allReducers = combineReducers({cartReducer});

export default allReducers; 
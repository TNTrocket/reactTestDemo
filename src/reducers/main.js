import { combineReducers } from "redux";
import indexReducer from './index'
import allArticleReducer from './allArticleReducer'

const rootReducer = combineReducers({
  indexReducer,
  allArticleReducer
})

export default rootReducer;
import { combineReducers } from "redux";
import indexReducer from './index'
import allArticleReducer from './allArticleReducer'
import editArticleReducer from './editArticleReducer'

const rootReducer = combineReducers({
  indexReducer,
  editArticleReducer,
  allArticleReducer
})

export default rootReducer;
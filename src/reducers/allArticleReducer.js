import Action from "../actions/main";

let { ALL_REQUEST, ALL_SUCCESS, ALL_FAILURE } = Action.types.allArticleTypes;

export default function allArticleReducer(state = {}, action) {
  console.log("action",action);
  switch (action.type) {
    case ALL_REQUEST:
      return { ...state };
    case ALL_SUCCESS:
      return { ...state, allArticleList : action.response.list, total : action.response.total };
    case ALL_FAILURE:
      return { logined:false };
    default:
      return state;
  }
}
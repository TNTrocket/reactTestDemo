import Action from "../actions/main";

let { EDIT_REQUEST, EDIT_SUCCESS, EDIT_FAILURE } = Action.types.editArticleTypes;

export default function editArticleReducer(state = {}, action) {
  console.log("action",action);
  switch (action.type) {
    case EDIT_REQUEST:
      return { ...state };
    case EDIT_SUCCESS:
      return { ...state, editArticleList : action.response.list, total : action.response.total };
    case EDIT_FAILURE:
      return { logined:false };
    default:
      return state;
  }
}
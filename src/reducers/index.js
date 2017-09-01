import Action from "../actions/main";

let { USER_REQUEST, USER_SUCCESS, USER_FAILURE } = Action.types.indexTypes;

export default function indexReducer(state = {}, action) {
  switch (action.type) {
    case USER_REQUEST:
      return { logined:false, error:null };
    case USER_SUCCESS:
      return { logined:true, error:null };
    case USER_FAILURE:
      return { logined:false };
    default:
      return state;
  }
}
import { CALL_API } from '../middleware/api'


export const indexTypes = {
  USER_REQUEST : 'USER_REQUEST',
  USER_SUCCESS : 'USER_SUCCESS',
  USER_FAILURE : 'USER_FAILURE'
}

const fetchUser = option => ({
  [CALL_API]: {
    types: Object.keys(indexTypes),
    url: `/users/`,
    option: {
      data:"tnt"
    }
  }
})

export function findUser() {
  return (dispatch, getState) => {
    dispatch(fetchUser());
  }
}


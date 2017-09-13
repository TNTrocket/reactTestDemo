import { CALL_API } from '../middleware/api'


export const editArticleTypes = {
  EDIT_REQUEST : 'EDIT_REQUEST',
  EDIT_SUCCESS : 'EDIT_SUCCESS',
  EDIT_FAILURE : 'EDIT_FAILURE'
}

const fetchEditArticle = (option) => {
  return {
    [CALL_API]: {
      types: Object.keys(editArticleTypes),
      url: '/article/list/edited',
      option: {
        data: {
          offset: 10 * (option ? option.page : 1)
        },
        method: "post"
      }
    }
  }
}

export function getEditArticle(option) {
  return (dispatch, getState) => {
    dispatch(fetchEditArticle(option));
  }
}


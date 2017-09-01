import { CALL_API } from '../middleware/api'


export const allArticleTypes = {
  ALL_REQUEST : 'ALL_REQUEST',
  ALL_SUCCESS : 'ALL_SUCCESS',
  ALL_FAILURE : 'ALL_FAILURE'
}

const fetchAllArticle = (option) => {
  console.log("option===",option);
  return {
    [CALL_API]: {
      types: Object.keys(allArticleTypes),
      url: '/article/list/all',
      option: {
        data: {
          offset: 10 * (option ? option.page : 1)
        },
        method: "post"
      }
    }
  }
}

export function getAllArticle(option) {
  return (dispatch, getState) => {
    dispatch(fetchAllArticle(option));
  }
}


import * as index from './index'
import * as allArticle from './allArticleAction'


const Action = {
  creators : {
    findUser : index.findUser,
    getAllArticle : allArticle.getAllArticle
  },
  types : {
    indexTypes : index.indexTypes,
    allArticleTypes : allArticle.allArticleTypes
  }
}


export default Action
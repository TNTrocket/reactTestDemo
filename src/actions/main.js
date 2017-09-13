import * as index from './index'
import * as allArticle from './allArticleAction'
import * as editArticle from './editArticleAction'


const Action = {
  creators : {
    findUser : index.findUser,
    getAllArticle : allArticle.getAllArticle,
    getEditArticle : editArticle.getEditArticle
  },
  types : {
    indexTypes : index.indexTypes,
    allArticleTypes : allArticle.allArticleTypes,
    editArticleTypes : editArticle.editArticleTypes
  }
}


export default Action
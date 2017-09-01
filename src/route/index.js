import Index from '../component/index'
import AllArticle from '../component/allArticle'
import Wuyou from '../component/wuyou'
import Publish from '../component/publish'
import HelpLink from '../component/helpLink'
import EditArticle from '../component/editArticle'
import UnEditArticle from '../component/unEditArticle'

const routes = [
  { path: '/',
    exact:true,
    component: Index
  },
  { path: '/wuyou',
    component: Wuyou,
  },
  { path: '/allArticle',
    component: AllArticle,
  },
  { path: '/publish',
    component: Publish,
  },
  { path: '/helpLink',
    component: HelpLink,
  },
  { path: '/editArticle',
    component: EditArticle,
  },
  { path: '/unEditArticle',
    component: UnEditArticle,
  },
]
export default  routes
const API_ROOT = 'http://localhost'


const callApi = (url, option) => {
  const fullUrl = (url.indexOf(API_ROOT) === -1) ? API_ROOT + url : url
  option.method = option.method || "post";
  option.contentType = option.contentType || 'application/json';
  option.headers = option.headers || {};
  option.headers["Accept"] = option.headers["Accept"] || "application/json";
  option.body = JSON.stringify(option.data || {});

  return fetch(fullUrl,option)
    .then(response =>
      response.json().then(data => {
        if (!response.ok) {
          return Promise.reject(data)
        }

        return Object.assign({},data)
      })
    )
}

function getSearchParams(options) {
  options = options || {};
  let searchParam = new URLSearchParams();

  Object.keys(options).forEach( key => {
    let value = options[key];
    //对非基本类型的数据进行预处理
    if (typeof value === "object") {
      if (value["_isAMomentObject"]) {
        // value = moment(value).format("YYYY-MM-DD HH:mm:ss");
        value = moment(value);
      } else {
        value = JSON.stringify(value);
      }
    }
    searchParam.append(key, value);
  })
  return searchParam;
}


export const CALL_API = 'Call API'
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { url } = callAPI
  const { option, types } = callAPI

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))

  return callApi(url, option).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
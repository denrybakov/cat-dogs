import * as TYPE from '../Types'

export const getCatImg = value => ({
  type: TYPE.GET_CAT_IMG,
  payload: value
})

export const likeCat = value => ({
  type: TYPE.LIKE_CAT,
  payload: value
})

export const dislikeCat = value => ({
  type: TYPE.DISLIKE_CAT,
  payload: value
})

// SAGA 
export const sagaGetCatImg = value => ({
  type: TYPE.SAGA_GET_CAT_IMG,
  payload: value
})

export const sagaLikeCat = value => ({
  type: TYPE.SAGA_LIKE_CAT,
  payload: value
})

export const sagaDislikeCat = value => ({
  type: TYPE.SAGA_DISLIKE_CAT,
  payload: value
})


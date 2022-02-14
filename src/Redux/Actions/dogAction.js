import * as TYPE from '../Types'

export const getDogImg = value => ({
  type: TYPE.GET_DOG_IMG,
  payload: value
})

export const likeDog = value => ({
  type: TYPE.LIKE_DOG,
  payload: value
})

export const dislikeDog = value => ({
  type: TYPE.DISLIKE_DOG,
  payload: value
})

// SAGA
export const sagaGetDogImg = value => ({
  type: TYPE.SAGA_GET_DOG_IMG,
  payload: value
})

export const sagaLikeDog = value => ({
  type: TYPE.SAGA_LIKE_DOG,
  payload: value
})

export const sagaDislikeDog = value => ({
  type: TYPE.SAGA_DISLIKE_DOG,
  payload: value
})

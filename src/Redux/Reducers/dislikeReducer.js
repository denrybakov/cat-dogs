import * as TYPE from '../Types'

export const dislikeReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TYPE.DISLIKE_DOG:
      return [...state, payload]
    case TYPE.DISLIKE_CAT:
      return [...state, payload]
    default:
      return state
  }
}

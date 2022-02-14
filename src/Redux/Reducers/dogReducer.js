import * as TYPE from '../Types'

export const dogReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TYPE.GET_DOG_IMG:
      return { ...payload }
    // case TYPE.LIKE_DOG:
    //   return [payload]
    default:
      return state
  }
}

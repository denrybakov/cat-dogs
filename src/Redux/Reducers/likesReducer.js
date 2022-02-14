import * as TYPE from '../Types'

export const likesReducer = (state = [], { type, payload }) => {

  switch (type) {
    case TYPE.LIKE_DOG:
      return [...state, payload]
    case TYPE.LIKE_CAT:
      return [...state, payload] //здесь я отправляю из обьекта который сформировал в CARDS {image: img} 
    default:
      return state
  }
}

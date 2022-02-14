import * as TYPE from '../Types'

export const catReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TYPE.GET_CAT_IMG:
      return { image: payload.map(item => item.url).join('') }
    default:
      return state
  }
}

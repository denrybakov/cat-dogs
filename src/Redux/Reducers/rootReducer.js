import { combineReducers } from 'redux'
import { dogReducer } from './dogReducer'
import { likesReducer } from './likesReducer'
import { catReducer } from './catReducer'
import { dislikeReducer } from './dislikeReducer'

export const rootReducer = combineReducers({
  dogImg: dogReducer,
  likes: likesReducer,
  catImg: catReducer,
  dislikes: dislikeReducer,
})

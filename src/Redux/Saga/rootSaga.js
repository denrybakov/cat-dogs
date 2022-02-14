import { all } from "redux-saga/effects";
import { getDogImgSagaWatcher, likeDogSagaWatcher, dislikeDogSagaWatcher } from './dogSaga'
import { getCatImgSagaWatcher, likeCatSagaWatcher, dislikeCatSagaWatcher } from "./catSaga";

export default function* rootSaga() {
  yield all([
    getDogImgSagaWatcher(),
    likeDogSagaWatcher(),
    getCatImgSagaWatcher(),
    likeCatSagaWatcher(),
    dislikeDogSagaWatcher(),
    dislikeCatSagaWatcher(),
  ])
}

import { call, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects'
import * as TYPE from '../Types'
import axios from 'axios';

import { getCatImg, likeCat, dislikeCat } from '../Actions/catAction';

// запрос API img 
const fetchGetCatImg = () => axios('https://api.thecatapi.com/v1/images/search?size=full')
  .then(res => res.data)
  .catch(err => console.log('Кошак ошибся ', err))

// для добавления лайков кошаков в стейт 
const fetchLikeCat = likeData => likeData

const fetchDislikeCat = dislikeData => dislikeData

// worker 
function* getCatImgSagaWorker({ payload }) {
  try {
    const catImg = yield call(fetchGetCatImg, payload)
    yield put(getCatImg(catImg))
  } catch (err) {
    yield put(getCatImg({ image: 'С кошаком что-то не так! Походу псина его испугала и он убежал' }))
  }
}

function* likeCatSagaWorker({ payload }) {
  try {
    const favoriteCat = yield call(fetchLikeCat, payload)
    yield put(likeCat(favoriteCat))
  } catch (err) {
    yield put(likeCat({ image: 'У кошака определенно проблемы' }))
  }
}

function* dislikeCatSagaWorker({ payload }) {
  try {
    const disCat = yield call(fetchDislikeCat, payload)
    yield put(dislikeCat(disCat))
  } catch (err) {
    yield put(dislikeCat({ image: 'Чудной кошак. Вечно с ним проблемы' }))
  }
}

// Watcher
function* getCatImgSagaWatcher() {
  yield takeLatest(TYPE.SAGA_GET_CAT_IMG, getCatImgSagaWorker)
}

function* likeCatSagaWatcher() {
  yield takeLatest(TYPE.SAGA_LIKE_CAT, likeCatSagaWorker)
}

function* dislikeCatSagaWatcher() {
  yield throttle(500, TYPE.SAGA_DISLIKE_CAT, dislikeCatSagaWorker)
}

export { getCatImgSagaWatcher, likeCatSagaWatcher, dislikeCatSagaWatcher }

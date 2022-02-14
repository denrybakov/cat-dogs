import { call, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects'
import * as TYPE from '../Types'
import axios from 'axios';

import { getDogImg, likeDog, dislikeDog } from '../Actions/dogAction';

// запрос на бэк для получения IMG
const fetchGetDogImg = () => axios('https://dog.ceo/api/breeds/image/random')
  .then(res => res.data)
  .catch(err => console.log('error img dog ', err))

//  для добавления лайков собак в стейт 
const fetchLikeDog = likeData => likeData

// dislike 
const fetchDislikeDog = dislikeData => dislikeData

// worker 
function* getDogImgSagaWorker({ payload }) {
  try {
    const dogImg = yield call(fetchGetDogImg, payload)
    yield put(getDogImg(dogImg))
  } catch (err) {
    yield put(getDogImg({ message: 'error img :(((' }))
  }
}

function* likeDogSagaWorker({ payload }) {
  try {
    const favoriteDog = yield call(fetchLikeDog, payload)
    yield put(likeDog(favoriteDog))
  } catch (err) {
    yield put(likeDog({ image: 'Что-то не так пошло' }))
  }
}

function* dislikeDogSagaWorker({ payload }) {
  try {
    const disDog = yield call(fetchDislikeDog, payload)
    yield put(dislikeDog(disDog))
  } catch (err) {
    yield put(dislikeDog({ image: 'err' }))
  }
}

// watcher 
function* getDogImgSagaWatcher() {
  yield takeLatest(TYPE.SAGA_GET_DOG_IMG, getDogImgSagaWorker)
}

function* likeDogSagaWatcher() {
  yield takeLatest(TYPE.SAGA_LIKE_DOG, likeDogSagaWorker)
}

function* dislikeDogSagaWatcher() {
  yield throttle(500, TYPE.SAGA_DISLIKE_DOG, dislikeDogSagaWorker)
}

export { getDogImgSagaWatcher, likeDogSagaWatcher, dislikeDogSagaWatcher } 

import { sagaGetCatImg, sagaLikeCat, sagaDislikeCat } from '../Redux/Actions/catAction'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import Card from "./Card/Card"

const Cat = () => {
  const defaultImg = 'https://irecommend.ru/sites/default/files/product-images/11006/tumblr_krjnka6cql1qzlov6o1_400.jpg'
  const dispatch = useDispatch()
  const catImg = useSelector(state => state.catImg)

  const nextCat = () => {
    dispatch(sagaGetCatImg())
  }

  return (
    <section className="cat">
      <h1>Кошки</h1>
      <Card
        img={catImg.image || defaultImg}
        like={sagaLikeCat}
        baraban={nextCat}
        dislike={sagaDislikeCat}
      />
    </section>
  )
}

export default Cat

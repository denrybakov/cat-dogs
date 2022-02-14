
import { sagaGetDogImg, sagaLikeDog, sagaDislikeDog } from "../Redux/Actions/dogAction"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Card from "./Card/Card"

const Dog = () => {
  const dogImg = useSelector(state => state.dogImg)
  const dispatch = useDispatch()

  const nextDog = () => {
    dispatch(sagaGetDogImg())
  }

  const defaultImg = 'https://irecommend.ru/sites/default/files/product-images/11006/tumblr_krjnka6cql1qzlov6o1_400.jpg'

  return (
    <section className="dog">
      <h1>Собаки</h1>
      <Card
        img={dogImg.message || defaultImg}
        like={sagaLikeDog}
        baraban={nextDog}
        dislike={sagaDislikeDog}
      />
    </section>
  )
}

export default Dog

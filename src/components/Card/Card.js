import { useDispatch } from "react-redux"
import { useState, useEffect } from "react"

const Card = ({ img, baraban, like, dislike }) => {
  const [go, setGo] = useState(true)

  useEffect(() => {
    setGo(true)
  }, [])

  const dispatch = useDispatch()
  const handlerLike = () => {
    const dataFavorite = { image: img }
    dispatch(like(dataFavorite))
    baraban()
  }

  const handlerDislike = () => {
    const dataDislike = { image: img }
    dispatch(dislike(dataDislike))
    baraban()
  }

  const changeGo = () => {
    setGo(false)
    baraban()
  }

  const renderGroupBtn = () => (
    <div className="card__btns">
      <button
        className="card__like"
        onClick={handlerLike}
      >&#128077;&#127996;</button>
      <button
        className="card__baraban"
        onClick={() => baraban()}
      >Безразлично</button>
      <button
        className="card__dislike"
        onClick={handlerDislike}
      >&#128078;&#127996;<i>Плохих животных<br></br> не бывает!</i></button>
    </div>
  )

  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="" />
      </div>
      {go ? <button onClick={changeGo}>Поехали</button> : renderGroupBtn()}
    </div>
  )
}


export default Card

import { useSelector } from "react-redux"

const Favorite = () => {
  const likes = useSelector(state => state.likes)
  const dislikes = useSelector(state => state.dislikes)


  return (
    <section className="favorite">
      <h1>Любимые</h1>
      <div className="all">
        {likes.map((item, i) => <div className='all__item' key={item.image + i}><img src={item.image} height="100" width="100" /></div>)}
      </div>

      <h2>Отвергнутые</h2>
      <div className="all">
        {dislikes.map((item, i) => <div className="all__item" key={item.image + i}><img src={item.image} height="100" width="100" /></div>)}
      </div>
    </section>
  )
}

export default Favorite

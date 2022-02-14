import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to='/'>Главная</Link>
      <Link to='/cat'>Кошечки</Link>
      <Link to='/dog'>Собачки</Link>
      <Link to='/favorite'>Избранное</Link>
    </header>
  )
}

export default Header

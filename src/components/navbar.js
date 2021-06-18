import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <h1><NavLink to='/'>Ovv</NavLink></h1>
      <nav>
        <ul>
          <h3><NavLink to='/about' className='link'>About</NavLink></h3>
          <h3><NavLink to='/contact' className='link'>Contact</NavLink></h3>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

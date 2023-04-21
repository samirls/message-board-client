import {Link} from 'react-router-dom';
import "./header.css"

function Header() {
  return (
  <header>
    <Link className='link' to ={'/'}>Mini Message Board</Link>
    <Link className='link link2' to={'/new'}>New Message</Link>
    
  </header>
  )
}

export default Header
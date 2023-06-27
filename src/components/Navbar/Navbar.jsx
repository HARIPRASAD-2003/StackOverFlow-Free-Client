import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg';
import Avatar from '../../components/Avatar/Avatar';
import './Navbar.css';
import { NavLink } from 'react-router-dom'

import { setCurrentUser } from '../../actions/currentUser';
import decode from 'jwt-decode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes  } from '@fortawesome/free-solid-svg-icons';
// import LeftSidebar from '../LeftSidebar/LeftSidebar';

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [menuToggle, setMenuToggle] = useState(false);

  var User = useSelector(state => state.currentUserReducer)
  // console.log(User)

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(() => {

    const handleLogout = () => {
    dispatch({type: "LOGOUT"})
    navigate('/')
    dispatch(setCurrentUser(null))
    setMenuToggle(false)
    }

    const token = User?.token
    if(token){
      const decodeToken = decode(token)
      if(decodeToken.exp * 1000 < new Date().getTime()){
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))))
  },[User?.token, dispatch])

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    setMenuToggle(false)
    navigate('/search/'+searchQuery)
    setSearchQuery('');
  };

  window.onscroll = () => {
    setMenuToggle(false)
  }


  return (
    <nav className='main-nav'>
      <>
      { menuToggle ?
        <FontAwesomeIcon icon={faTimes} onClick={() => setMenuToggle(!menuToggle)} className='toggle-btn'/>
        :
        <FontAwesomeIcon icon={faBars} onClick={() => setMenuToggle(!menuToggle)} className='toggle-btn'/>
      }
      </>
      <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo'/>
      </Link>
      { !menuToggle ? <div className="navbar">
        <Link to='/About' className='nav-item nav-btn' >About</Link>
        <Link to='/Products' className='nav-item nav-btn' >Products</Link>
        <Link to='/Community' className='nav-item nav-btn' >Community</Link>
        <form onSubmit={(e) => handleSearch(e)} className='nav-item' >
          <label htmlFor="search_input">
            <input type="text" id='search_input' placeholder='Search...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <img src={search} alt='search' width="18" className='search-icon'/>
          </label>
        </form>
        { User === null ?
            <div className="btns">
              <Link to='/Auth/login' ><button className='nav-item nav-links' >Login</button></Link>
              <Link to='/Auth/signup' ><button className='nav-item nav-links' >Signup</button></Link>
            </div>
            :
            <>
                <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'>
                  <Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:"none"}}><>{
                    User?.result?.name === null ? 'S' : User?.result?.name.charAt(0).toUpperCase()
                    }</>
                  </Link>
                  </Avatar>
                <button className='nav-item nav-links' onClick={handleLogout}>Logout</button>
            </>
        }
      </div>
      :
      <div className="menubar">
        <div className='menu-col' style={{justifyContent: 'center', alignItems: 'center'}}>
          <div onClick={() => setMenuToggle(false)}><Link to='/About' className='nav-item nav-btn' >About</Link></div>
          <div onClick={() => setMenuToggle(false)}><Link to='/Products' className='nav-item nav-btn' >Products</Link></div>
          <div onClick={() => setMenuToggle(false)}><Link to='/Community' className='nav-item nav-btn' >Community</Link></div>
        </div>
        <div className='menu-col' style={{padding:'10px'}}><span className="Span"> </span></div>
        <div className='menu-col' style={{justifyContent: 'center', alignItems: 'center'}}>
          <div onClick={() => setMenuToggle(false)}><Link to='/Questions' className='nav-item nav-btn' >Questions</Link></div>
          <div onClick={() => setMenuToggle(false)}><Link to='/Tags' className='nav-item nav-btn'  >Tags</Link></div>
          <div onClick={() => setMenuToggle(false)}><Link to='/Users' className='nav-item nav-btn'  >Users</Link></div>
        </div>
        <div>
          <form onSubmit={(e) => handleSearch(e)} className='nav-item' >
            <input type="text" id='search_input' placeholder='Search...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <img src={search} alt='search' width="18" className='search-icon'/>
          </form>
        </div>
        { User === null ?
            <div className="btns">
              <Link to='/Auth/login' onClick={() => setMenuToggle(false)}><button className='nav-item nav-links'>Login</button></Link>
              <Link to='/Auth/signup' onClick={() => setMenuToggle(false)}><button className='nav-item nav-links'>Signup</button></Link>
            </div>
            :
            <div className='btns'>
                <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white' onClick={() => setMenuToggle(false)}>
                  <Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:"none"}}><>{
                    User?.result?.name === null ? 'S' : User?.result?.name.charAt(0).toUpperCase()
                    }</>
                  </Link>
                  </Avatar>
                <button className='nav-item nav-links' onClick={handleLogout}>Logout</button>
            </div>
        }
        
      </div>
}
    </nav>
  )
}

export default Navbar

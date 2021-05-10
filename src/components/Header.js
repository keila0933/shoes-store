import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Panel from 'components/Panel'
import UserProfile from 'components/UserProfile'

const Header = (props) => {
  const [visible, setVisible] = useState('menu')

  const showProfile = () => {
    Panel.open({
      component: UserProfile,
      props: {
        user: props.user,
      },
      callback: (data) => {
        if (data === 'logout') {
          props.history.go(0)
        }
      },
    })
  }

  const showMenu = () => {
    setVisible('menu visible')
  }

  const closeMenu = () => {
    setVisible('menu')
  }

  return (
    <div className="header">
      <div className="grid">
        <button
          className="menu-btn"
          onClick={showMenu}
          onMouseOver={showMenu}
          onMouseOut={closeMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="start">
          <Link to="/">Home</Link>
        </div>
        <div className="end">
          {props.user.nickname ? (
            <span className="nickname" onClick={showProfile}>
              <i className="far fa-user"></i>
              {props.user.nickname}
            </span>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
      <ul className={visible} onMouseOver={showMenu} onMouseOut={closeMenu}>
        <li>NEW ARRIVALS</li>
        <li>All</li>
        <li>AIR JORDAN</li>
        <li>NIKE</li>
        <li>ADIDAS</li>
      </ul>
    </div>
  )
}
export default withRouter(Header)

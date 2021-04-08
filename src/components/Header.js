import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Panel from 'components/Panel'
import UserProfile from 'components/UserProfile'

const Header = (props) => {
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
  return (
    <div className="header">
      <div className="grid">
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
    </div>
  )
}
export default withRouter(Header)

import React from 'react'

export default function UserProfile(props) {
  const logout = () => {
    global.auth.logout()
    props.close('logout')
  }

  return (
    <div className="user-profile">
      <p className="title">Profile</p>
      <fieldset disabled>
        <div className="field">
          <label className="label">Nickname</label>
          <input
            className="input"
            type="text"
            defaultValue={props.user.nickname}
          />
        </div>
        <div className="field">
          <label className="label">Email</label>
          <input
            className="input"
            type="text"
            defaultValue={props.user.email}
          />
        </div>
        <div className="field">
          <label className="label">Type</label>
          <input
            className="input"
            type="text"
            defaultValue={props.user.type === 1 ? 'Manager' : 'GeneralUser'}
          />
        </div>
      </fieldset>
      <div className="btn-field">
        <button className="button is-danger" onClick={logout}>
          Logout
        </button>
        <button
          className="button"
          type="button"
          onClick={() => {
            props.close()
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

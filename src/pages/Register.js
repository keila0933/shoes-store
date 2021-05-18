import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'commons/axios'
import { toast } from 'react-toastify'
import Layout from 'Layout'
import { Link } from 'react-router-dom'

export default function Login(props) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = async (data) => {
    // 3. Register logic
    try {
      const { nickname, email, password } = data
      const res = await axios.post('/auth/register', {
        email,
        password,
        nickname,
        type: 0,
      })
      const jwToken = res.data
      global.auth.setToken(jwToken)
      toast.success('Register Success')
      // 4. To index
      props.history.push('/')
    } catch (error) {
      const { message } = error.response.data
      toast.error(message)
    }
  }
  return (
    <Layout>
      <div className="login-wrapper">
        <div className="login-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-tab">
              <Link to="/login">Login</Link>/
              <Link to="/register">Register</Link>
            </div>
            <input
              className={`input ${errors.nickname && 'is-danger'}`}
              type="text"
              placeholder="Nickname"
              name="nickname"
              ref={register({
                required: 'nickname is required',
              })}
            />
            {errors.nickname && (
              <p className="helper has-text-danger">
                {errors.nickname.message}
              </p>
            )}
            <input
              className={`input ${errors.email && 'is-danger'}`}
              type="text"
              placeholder="Email"
              name="email"
              ref={register({
                required: 'email is required',
                pattern: {
                  value:
                    /^[A-Za-z0-9]+([_\\.][A-Za-z0-9]+)*@([A-Za-z0-9\\-]+\.)+[A-Za-z]{2,6}$/,
                  message: 'invalid email',
                },
              })}
            />
            {errors.email && (
              <p className="helper has-text-danger">{errors.email.message}</p>
            )}
            <input
              className={`input ${errors.password && 'is-danger'}`}
              type="password"
              placeholder="Password"
              name="password"
              ref={register({
                required: 'password is required',
                minLength: {
                  value: 6,
                  message: 'cannot be less than 6 digits',
                },
              })}
            />
            {errors.password && (
              <p className="helper has-text-danger">
                {errors.password.message}
              </p>
            )}
            <button className="button is-fullwidth is-primary">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'commons/axios'
import { toast } from 'react-toastify'
import Layout from 'Layout'
import { Link } from 'react-router-dom'

export default function Login(props) {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = async (data) => {
    // 1. login logic
    try {
      const { email, password } = data
      const res = await axios.post('/auth/login', { email, password })
      const jwToken = res.data
      global.auth.setToken(jwToken)
      toast.success('Login Success')
      // 2. to index
      props.history.push('/')
    } catch (error) {
      const { message } = error.response.data
      toast.error(message)
    }
  }

  return (
    <Layout>
      <div className="login-wrapper">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <div className="login-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-tab">
              <Link to="/login">Login</Link>/
              <Link to="/register">Register</Link>
            </div>
            {/* register your input into the hook by invoking the "register" function */}
            {/* include required & validation rules */}
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
              <p className="has-text-danger">{errors.email.message}</p>
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
              <p className="has-text-danger">{errors.password.message}</p>
            )}
            <button className="button">Login</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

import React, { useEffect, useState } from "react";
import "../Login/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../component/Loading/Loading";
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'

const Login = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="login">
          <Formik initialValues={{
            email: "",
            password: ""
          }}
            //validation schema
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
              password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters long')
                .max(20, 'Password must not exceed 20 characters')
            })}

            onSubmit={(values, { resetForm }) => {
              console.log(values);
              axios.post("http://localhost:8080/auth/login", values, {
                withCredentials: true
              }).then(res => {
                toast.success("Login Successful!")
                console.log(res.data.data.isAdmin);
                if (res.data.data.isAdmin === true) {
                  console.log('admin');
                  navigate('/admin')
                }
                else {
                  navigate('/')
                }
              })
              resetForm()
            }}
          >
            {
              ({ values, handleSubmit, handleChange, handleBlur, dirty, touched, errors }) => (
                <form onSubmit={handleSubmit}>

                  <input type="email" placeholder='Email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                  {touched.email && errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}

                  <input type="password" placeholder='Password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                  {touched.password && errors.password && (
                    <div className="error-message">{errors.password}</div>
                  )}
                  <button type='submit' disabled={!dirty}>Submit</button>
                  <p className="forgot-password text-right">
                    Don't have an account? <Link onClick={() => navigate('/regist')}>Register</Link>
                  </p>
                </form>
              )
            }
          </Formik>
        </div>
      )}
      <Toaster />

    </>
  );
};

export default Login;

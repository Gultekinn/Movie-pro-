import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../component/Loading/Loading";
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Toaster, toast } from 'react-hot-toast'
import "../Regist/Regist.scss"
import { Helmet } from "react-helmet";
const Regist = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const navigate = useNavigate();
  return (
    <>
    <Helmet>
                <title>Register</title>
            </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <div className="register">
                         

          <Formik initialValues={{
                username: "",
                email: "",
                password: ""
              }}
                //validation schema
                validationSchema={Yup.object({
                  username: Yup.string().required("Username is required!"),
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
                  axios.post("http://localhost:8080/auth", values).then(res => {
                    toast.success("Succesfully Registered!")
                  })
                  navigate('/login')
                  resetForm()
                }}
              >
                {
                  ({ values, handleSubmit, handleChange, handleBlur , dirty, touched, errors }) => (
            

                    <form id="form" onSubmit={handleSubmit}>
                            <h1>Sign up</h1>
                      <input className="inptt" type="text" placeholder='Username' id='username' value={values.username} onChange={handleChange} onBlur={handleBlur}/>

                      <input  className="inptt" type="email" placeholder='Email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                      {touched.email && errors.email && (
                        <div className='error-message'>{errors.email}</div>
                      )}

                      <input  className="inptt" type="password" placeholder='Password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                      {touched.password && errors.password && (
                        <div className='error-message'>{errors.password}</div>
                      )}

                      <button id="btnnn" type='submit' disabled={!dirty}>Submit</button>
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

export default Regist;

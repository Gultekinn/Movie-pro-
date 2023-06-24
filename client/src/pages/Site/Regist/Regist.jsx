import React, { useEffect, useState } from 'react'
import '../Regist/Regist.scss'
import { Link, useNavigate } from "react-router-dom";
import Loading from '../../../component/Loading/Loading';
import "../Regist/Regist.scss"

const Regist = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
const navigate=useNavigate()
  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
    <div className="register">
         <form id='form'>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
          id='input'
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input id='input' type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
          id='input'
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
          id='input'
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link onClick={()=>navigate('/login')}>sign in?</Link>
        </p>
      </form>
      </div>
      )}
    </>
  )
}

export default Regist

import React, { useEffect, useState } from "react";
import "../Login/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../component/Loading/Loading";

const Login = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const naviget = useNavigate();
  return (
    <>
     {loading ? (
        <Loading/>
      ) : (
      <div className="login">
        <form>
          <h3>Sign In</h3>
          <div className="mb-3">
            <input
              id="input"
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <input
              id="input"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Have a account{" "}
            <Link onClick={() => naviget("/regist")}>password?</Link>
          </p>
        </form>
      </div>
      )}
    </>
  );
};

export default Login;

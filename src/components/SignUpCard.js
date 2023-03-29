import React from 'react'
import Carticon from './Carticon';
import { LoginIcon } from './LoginIcon';

const SignUpCard = () => {
  return (
    <div>
      <div className="main-container">
        <div className="form-container">
          <form className="wide" action="">
            <label className="form-label" htmlFor="Name"></label>
            <input className="form-input" type="text" placeholder="Name" />
            <br />

            <label className="form-label" htmlFor="Email"></label>
            <input className="form-input" type="Email" placeholder="Email" />
            <br />
            <label className="form-label" htmlFor="password"></label>
            <input
              className="form-input"
              type="password"
              placeholder="password"
            />
            <br />
            <label className="form-label" htmlFor="phonenumber"></label>
            <input className="form-input" type="Number" placeholder="Number" />
            <br />
            <label className="form-label" htmlFor="Address"></label>
            <input className="form-input" type="text" placeholder="Address" />
            <br />
            <div
              style={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <LoginIcon style={{ width: "25px", height: "25px" }} />
              <div
                style={{
                  overflow: "hidden",
                  height: "100%",
                  width: "100%",
                  backgroundColor: " ",
                  display: "inline-block",
                }}
              >
                <Carticon
                  style={{
                    width: "65px",
                    height: "65px",
                    borderRadius: "50%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <button className="form-button">Signup</button>
            </div>

            <p className="form-footer">Already have an account?</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpCard

import React from 'react';
import styles from './login.css';

const Login= () => {
    return(
        <div className="form-style">
           <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1" style={{marginRight: '10px'}}>Email address:</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1" style={{marginRight: '10px'}}>Password:</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1" style={{marginRight: '10px'}}>Confirm Password:</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    )

}
export default Login;

import React, {Component} from 'react';
import './Login.css'; 
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render (){
        return (
          <div className="loginBackground">
            <div className="body text-center">
      <main className="form-signin">
  <form>
    <h1 className='homepagetitle'>WELCOME</h1><br/>
    <h2 className="h3 mb-3 fw-normal">ADMIN PORTAL</h2>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <Link to="/home">
    <button className="w-100 btn btn-lg btn-primary, signin" type="submit">SIGN IN</button>
    </Link>
    <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
  </form>

</main>
</div>
</div>
        );
    }

}
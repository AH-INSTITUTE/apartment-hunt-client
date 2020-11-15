import React, { useContext } from 'react';
import './Css/Style.scss'
import { Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../images/icons/google.png';
import logo from '../images/logos/Logo.png';
import { AuthContext } from './Auth';
import { ExtraDataContext } from '../ExtraData/ExtraData';

const Login = () => {
    document.title = "Login-Pages";
    //get user login form auth.js file
    const auth = useContext(AuthContext);
    const { handleGoogleSignIn } = auth;

    //redirect to path settings
    const location = useLocation();
    const history = useHistory()
    let { from } = location.state || { from: { pathname: "/dashboard" } };

    //google sign in 
    const handGoogleSign = () => {

        handleGoogleSignIn()
            .then(r => {
                history.replace(from);
            })
    }

    //ExtraData Context
    const extraData = useContext(ExtraDataContext);
    const {oldUser,setOldUser} = extraData;
    console.log(oldUser);

    
    return (
        <Container id="login" className="">
            <div className="logo-img">
                <Link to="/">
                    <img src={logo} alt="logo..." />
                </Link>
            </div>
            <div className="row">
                <div className="signed-in-option col-md-6 m-auto">
                    <div className="title">

                        <h3>Login With</h3>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <button className="login-sign-up-btn" onClick={() => handGoogleSign()}>
                            <span className="float-left pl-3 google-icon"><img src={googleIcon} alt="" /></span>
                            <span className="text-center mt-2 d-block">Continue with Google</span>
                        </button>
                    </div>
                    <div className="title-footer text-center py-2">
                        <p>Don't have account? <Link to="/" className="create-account">Create an account</Link> </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default Login;
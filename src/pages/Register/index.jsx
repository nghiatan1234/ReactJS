import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Link, useHistory } from 'react-router-dom';
import { registerAccountAction } from './Register.action';
import { connect } from "react-redux";

function Register(props) {

    const [userRegister, setRegisterInfo] = useState({
        userName: "",
        email: "",
        password: "",
    });

    const history = useHistory();

    const onChangeUsername = (e) => {
        setRegisterInfo({ ...userRegister, username: e.target.value });
    }

    const onChangePassword = (e) => {
        setRegisterInfo({ ...userRegister, password: e.target.value });
    }

    const onChangeEmail = (e) => {
        setRegisterInfo({ ...userRegister, email: e.target.value });
    }

    const onRegisterClick = (e) => {
        e.preventDefault();
        doRegister(userRegister);
    }

    const doRegister = async (e) => {
        e.preventDefault();
        try {
            await props.registerAccount(userRegister, history);
            
        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <Layout productsInCart={[]}>
            <main>
                {/* breadcrumb-area-start */}
                <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="breadcrumb-text text-center">
                                    <h1>Register</h1>
                                    <ul className="breadcrumb-menu">
                                        <li><Link to="/">home</Link></li>
                                        <li><span>Register</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb-area-end */}
                {/* login Area Strat*/}
                <section className="login-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="basic-login">
                                    <h3 className="text-center mb-60">Signup From Here</h3>
                                    <form onClick={onRegisterClick}>
                                        <label htmlFor="name">Fullname <span>**</span></label>
                                        <input id="name" type="text" placeholder="Enter Username or Email address..." onChange={onChangeUsername} />
                                        <label htmlFor="email-id">Email Address <span>**</span></label>
                                        <input id="email-id" type="text" placeholder="Enter Username or Email address..." onChange={onChangeEmail} />
                                        <label htmlFor="pass">Password <span>**</span></label>
                                        <input id="pass" type="password" placeholder="Enter password..." onChange={onChangePassword} />
                                        <div className="mt-10" />
                                        <button className="btn theme-btn-2 w-100">Register Now</button>
                                        <div className="or-divide"><span>or</span></div>
                                        <Link to="/login" className="btn theme-btn w-100">login Now</Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* login Area End*/}
            </main>
        </Layout>
    )
}

const mapStateToProps = (state) => {
    return {
        error: state.registerReducer.error
    }
}

const mapDispatchToProps = {
    registerAccount: registerAccountAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
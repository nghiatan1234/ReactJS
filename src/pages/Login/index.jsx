import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Link } from 'react-router-dom'

function Login() {

    const [userInfo, setUserInfo] = useState({
        userName: "",
        password: ""
    });

    const onChangeName = (event) => {
        setUserInfo(
            {
                ...userInfo,
                userName: event.target.value
            }
        )
    }

    const onChangePassword = (event) => {
        setUserInfo({
            ...userInfo,
            password: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(userInfo);
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
                                    <h1>Login</h1>
                                    <ul className="breadcrumb-menu">
                                        <li>
                                            <Link to="/">home</Link></li>
                                        <li><span>Login</span></li>
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
                                    <h3 className="text-center mb-60">Login From Here</h3>
                                    <form onSubmit={onSubmit}>
                                        <label htmlFor="name">Email Address <span>**</span></label>
                                        <input id="name" type="text" placeholder="Enter Username or Email address..." onChange={onChangeName} />
                                        <label htmlFor="pass">Password <span>**</span></label>
                                        <input id="pass" type="password" placeholder="Enter password..." onChange={onChangePassword} />
                                        <div className="login-action mb-20 fix">
                                            <span className="log-rem f-left">
                                                <input id="remember" type="checkbox" />
                                                <label htmlFor="remember">Remember me!</label>
                                            </span>
                                            <span className="forgot-login f-right">
                                                <a href="#">Lost your password?</a>
                                            </span>
                                        </div>
                                        <button className="btn theme-btn-2 w-100">Login Now</button>
                                        <div className="or-divide"><span>or</span></div>
                                        <Link className="btn theme-btn w-100" to="/register">
                                           Register Now
                                        </Link>
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

export default Login
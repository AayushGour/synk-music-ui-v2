import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL, LOGIN } from '../common/api-urls';
import { routeNames } from '../common/router';

const LoginComponent = (props) => {
    const navigate = useNavigate();

    const [emailId, setEmailIf] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const loginHandler = (e) => {
        e.preventDefault();
        console.log(e);
        const config = {
            url: BASE_URL + LOGIN,
            method: "post",
            data: {
                emailId: emailId,
                password: password
            }
        }
        axios(config).then((resp) => {
            console.log(resp.data)
            localStorage.setItem('token', resp?.data?.data?.token)
            localStorage.setItem('refreshToken', resp?.data?.data?.refreshToken)
            navigate(routeNames.DASHBOARD)
        })
    }

    return (
        <div className='login-container h-full w-100 flex flex-row justify-center items-center bg-transparent'>
            <div className="login-card min-w-[50%] w-auto lg:w-1/2 md:w-[80%] sm:w-[90%] h-[60%] bg-light shadow-xl shadow-primary-blue rounded-xl flex flex-col justify-center items-center">
                <div className='logo-container pb-8'>
                    <h3 className='font-title text-7xl leading-7xl'>sy<span className='text-[3.6rem] tracking-[5px]'>NK</span></h3>
                    <h4 className='text-4xl'>MUSIC</h4>
                </div>
                <form onSubmit={loginHandler} className="w-auto sm:w-[90%] md:w-[80%]  flex flex-col gap-6 mx-auto mt-8">
                    <input onChange={(e) => setEmailIf(e?.target?.value)} className='text-xl py-3 px-4' placeholder='Email Id' type="email" />
                    <div className="flex-col items-center content-center relative">
                        <input onChange={(e) => setPassword(e?.target?.value)} type={isPasswordVisible ? "text" : 'password'} className='text-xl py-3 px-4 flex-1 w-full' placeholder='Password' />
                        <a title={isPasswordVisible ? "Hide" : "Show"} onClick={() => setIsPasswordVisible(!isPasswordVisible)} className='absolute text-white hover:text-white right-[10px] top-1/2 -translate-y-1/2 cursor-pointer '>
                            {isPasswordVisible ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            }
                        </a>
                    </div>
                    <button className='mt-4 text-xl bg-primary-blue border hover:border hover:border-white' type='submit'>LOGIN</button>
                    <span className='text-base'>New here? <Link className='text-primary-blue' to={routeNames.SIGNUP}>Signup</Link></span>
                </form>
            </div >
        </div >
    )
}

export default LoginComponent;
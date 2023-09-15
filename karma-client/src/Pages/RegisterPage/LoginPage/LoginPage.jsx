

import { useContext, useState, } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/UserProvider";
import toast, { Toaster } from 'react-hot-toast';


const LoginPage = () => {
    const { signIn } = useContext(AuthContext)
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'





    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(data => {
                if (data.user) {
                    toast.success("signed in successfully")
                    alert("success")
                    navigate(from, { replace: true })
                    setError('')
                }


            })
            .catch(err => {
                setError(err.message)
                console.log(err)
            })



    }

    return (
        <div>
            <section className="bg-gray-700">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col text-white lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" >
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className=" input text-black input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className=" input text-black input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                {error && <p className="text-red-500 ">{error}</p>}
                                <div className="form-control mt-6">
                                    <button type="submit" className=" btn btn-primary">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
                <Toaster />
            </section >

        </div >
    );
};

export default LoginPage;
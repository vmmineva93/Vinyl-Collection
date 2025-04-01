import { useActionState } from 'react';
import { Link, useNavigate } from 'react-router'
import { useLogin } from '../../api/authApi';
import { useUserContext } from '../../context/UserContext';
import { toast } from 'react-toastify'

export default function Login() {
    const navigate = useNavigate();

    const { userLoginHandler } = useUserContext();
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        try {
            const authData = await login(values.email, values.password);
            userLoginHandler(authData);
            navigate(-1);
        } catch (err) {
            toast.error(err.message)
        }
    
    }

    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });


    return (
        <>
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0 reg-log-container">
                <div className="container quote px-lg-0">
                    <div className="row g-0 mx-lg-0 reg-log">
                        <div className="col-lg-6 ps-lg-0">
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src="../../../public/images/smile.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <div className="bg-primary mb-3"></div>
                                <h1 className="display-5 mb-5">Login</h1>
                                <form action={loginAction}>
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="email" className="form-control border-0" id="email" name="email" placeholder="Your Email" />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="password" className="form-control border-0" id="password" name="password" placeholder="Your Password" />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3 new-btn" type="submit" disabled={isPending}>Login</button>
                                        </div>
                                        <p className="field reg-log-span">
                                            <span>If you don't have profile click <Link to="/register" className='log-reg-text'>Register</Link></span>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

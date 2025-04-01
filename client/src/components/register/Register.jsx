import { useUserContext } from "../../context/UserContext";
import { useRegister } from "../../api/authApi";
import { useNavigate, Link } from "react-router";
import { toast } from 'react-toastify'

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData);

        try {
            const confirmPassword = formData.get('confirm-password');
            if (password !== confirmPassword) {
                throw new Error('Password missmatch!')
            }
            const authData = await register(email, password);

            userLoginHandler(authData);

            navigate('/');
        } catch (err) {
            toast.error(err.message)

        }
    }
    return (
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0 reg-log-container">
            <div className="container quote px-lg-0">
                <div className="row g-0 mx-lg-0 reg-log">
                    <div className="col-lg-6 ps-lg-0">
                        <div className="position-relative h-100">
                            <img className="position-absolute img-fluid w-100 h-100 log-reg-pic" src="../../../public/images/smile.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="p-lg-5 pe-lg-0">
                            <div className="bg-primary mb-3"></div>
                            <h1 className="display-5 mb-5">Register</h1>
                            <form action={registerHandler}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="email" className="form-control border-0" id="email" name="email" placeholder="Your Email" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="password" className="form-control border-0" id="password" name="password" placeholder="Your Password" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="password" className="form-control border-0" id="confirm-password" name="confirm-password" placeholder="Confirm Your Password" />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3 new-btn" type="submit">Register</button>
                                    </div>
                                    <p className="field reg-log-span">
                                        <span>If you already have profile click <Link to="/login" className='log-reg-text'>Login</Link></span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import { Link } from "react-router";

export default function NotFound() {
    return (
        <div className="container-fluid p-0 pb-5">
            <div className="owl-carousel header-carousel position-relative">
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="../../../public/images/vinyl-pic.jpg" alt="" />
                    <div className="carousel-inner">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-8 text-center">
                                    <h1 className="display-3 text-white animated slideInDown mb-4">Page not found</h1>
                                    <p className="fs-5 text-white mb-4 pb-2">Sorry, we couldn’t find the page you’re looking for.</p>
                                    <Link to="/" className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Go Back Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
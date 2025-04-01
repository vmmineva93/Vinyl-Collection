import { Link } from "react-router";

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-secondary footer mt-5 py-5 wow fadeIn footer" data-wow-delay="0.1s">
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>999 Street, Sofia, Bulgaria</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+359 99 99 99</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>antisocialvinylclub@gmail.com</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-square btn-outline-secondary rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                           
                        </div>
                        <img src="../../../public/images/cat2.jpg" height="275px" width="500px" alt="" />
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <Link className="border-bottom" href="/">AntiSocialVinylClub</Link>, All Right Reserved.
                    </div>
                </div>
            </div>
        </>
    );
}
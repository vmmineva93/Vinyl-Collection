import { Link } from "react-router";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded";
import { useLatestVinyls } from "../../api/vinylApi";

export default function Home() {
    const { latestVinyls } = useLatestVinyls();
   
    return (
        <div className="container-fluid p-0 pb-5">
            <div className="owl-carousel header-carousel position-relative">
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="../../../public/images/vinyl-pic.jpg" alt="" />
                    <div className="carousel-inner">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-8 text-center">
                                    <h1 className="display-3 text-white animated slideInDown mb-4">Welcome to Our AntiSocial Social Club</h1>
                                    <Link to="" className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Collection</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-primary mb-3 mx-auto"></div>
                        <h1 className="display-5 mb-5">Recently Added</h1>
                    </div>


                    <div className="row g-4 portfolio-container">
                        {latestVinyls.map(vinyl => <RecentlyAdded key={vinyl._id} {...vinyl} />)}
                    </div>
                </div>
            </div>
        </div>

    );
}
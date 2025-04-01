import { Link } from "react-router";
export default function RecentlyAdded({
    artist,
    album,
    _id,
    imageUrl
}) {

    return (

        <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-inner">
                <img className="img-fluid w-100" src={imageUrl} alt="" />
                <div className="text-center p-4">
                    <p className="text-primary mb-2">{artist}</p>
                    <h5 className="lh-base mb-0">{album}</h5>
                </div>
                <div className="portfolio-text text-center bg-white p-4">
                    <p className="text-primary mb-2">{artist}</p>
                    <h5 className="lh-base mb-3">{album}</h5>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-square btn-primary rounded-circle mx-1 new-btn" to={`/vinyls/${_id}/details`}>Details</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
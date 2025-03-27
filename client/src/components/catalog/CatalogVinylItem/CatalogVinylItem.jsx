import { Link } from 'react-router'

export default function CatalogVinylItem({
    _id,
    artist,
    album,
    imageUrl,
}) {
    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src={imageUrl} alt="" />
                            <div className="team-social">
                            <Link to={`/vinyls/${_id}/details`} className="details-button">Details</Link>
                            </div>
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0">{artist}</h5>
                            <span className="text-primary">{album}</span>
                        </div>
                    </div>
                </div>   
    )        
}

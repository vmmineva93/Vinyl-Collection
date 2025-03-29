import { Link, useNavigate, useParams } from "react-router";
import { useDeleteVinyl, useVinyl } from "../../api/vinylApi";
import useAuth from "../../hooks/useAuth";

export default function Details() {
    const navigate = useNavigate();
    const { userId } = useAuth()
    const { vinylId } = useParams();
    const { vinyl } = useVinyl(vinylId);
    const { deleteVinyl } = useDeleteVinyl();

    const vinylDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${vinyl.album} vinyl?`);

        if (!hasConfirm) {
            return;
        }

        await deleteVinyl(vinylId);

        navigate('/vinyls');
    };

    const isOwner = userId === vinyl._ownerId;
    
    return (
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
            <div className="container feature px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="p-lg-5 ps-lg-0">
                            <div className="bg-primary mb-3"></div>
                            <h5 className="display-5 mb-5">{vinyl.artist}</h5>
                            <h5 className="display-5 mb-5">{vinyl.album}</h5>
                            <p className="mb-4 pb-2">{vinyl.description}</p>
                            <div className="row g-4">
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <p className="text-primary mb-2">Label:</p>
                                            <h5 className="mb-0">{vinyl.label}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <p className="text-primary mb-2">Country:</p>
                                            <h5 className="mb-0">{vinyl.country}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <p className="text-primary mb-2">Released:</p>
                                            <h5 className="mb-0">{vinyl.released}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-4">
                                            <p className="text-primary mb-2">Genre:</p>
                                            <h5 className="mb-0">{vinyl.genre}</h5>
                                        </div>
                                    </div>
                                </div>
                                {isOwner && (
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-lg-8 text-center">
                                            <Link to={`/vinyls/${vinylId}/edit`} className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Edit</Link>
                                            <button onClick={vinylDeleteClickHandler} className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Delete</button>
                                            <Link to="/vinyls" className="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Like</Link>
                                            <div className="likes">
                                                <img className="hearts" src="/images/heart.png" />
                                                <span id="total-likes">Likes: 0</span>
                                            </div>
                                        </div>
                                    </div>

                                    // <div className="actions">

                                    //     <Link to={`/vinyls/${vinylId}/edit`} className="button" >Edit</Link>
                                    //     <Link className="button" onClick={vinylDeleteClickHandler}>Delete</Link>

                                    //     <Link className="button" to="#">Like</Link>

                                    //     <div className="likes">
                                    //         <img className="hearts" src="/images/heart.png" />
                                    //         <span id="total-likes">Likes: 0</span>
                                    //     </div>

                                    // </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                        <div className="position-relative h-100">
                            <img className="position-absolute img-fluid w-100 h-100" src={vinyl.imageUrl} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
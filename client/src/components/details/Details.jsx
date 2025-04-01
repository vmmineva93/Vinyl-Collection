import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useDeleteVinyl, useVinyl, useLikeVinyl } from "../../api/vinylApi";
import useAuth from "../../hooks/useAuth";
import styles from "./Details.module.css"

export default function Details() {
    const navigate = useNavigate();
    const { userId } = useAuth()
    const { vinylId } = useParams();
    const { vinyl: initialVinyl } = useVinyl(vinylId);
    const { likeVinyl } = useLikeVinyl();
    const { deleteVinyl } = useDeleteVinyl();
    const [vinyl, setVinyl] = useState({});
    const isVinylLikedByCurrentUser = vinyl?.likedBy?.includes(userId)

    useEffect(() => {
        if (initialVinyl) {
            setVinyl(initialVinyl);
        }
    }, [initialVinyl])

    const onLikeButtonClick = async () => {
        const updatedVinyl = await likeVinyl(vinyl);
        setVinyl(updatedVinyl);
    }

    const vinylDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Are you sure you want to delete ${vinyl.album} vinyl?`);

        if (!hasConfirm) {
            return;
        }

        await deleteVinyl(vinylId);

        navigate('/vinyls');
    };

    const isOwner = userId === vinyl?._ownerId;

    if (!vinyl) return (<div>No information for this vinyl</div>)

    return (
        <div className={styles["outer-container"]}>
            <div className={styles["inner-container"]}>
                <div className={styles["details-container"]}>
                    <div className={styles["left-container"]}>
                        <div className={styles["text-container"]}>
                            <h1 className={styles["display-artist"]}>{vinyl.artist}</h1>
                            <h1 className={styles["display-album"]}>{vinyl.album}</h1>
                            <p className={styles["display-description"]}>{vinyl.description}</p>
                            <div className={styles["vinyl-info"]}>
                                <div className={styles["col-6"]}>
                                    <div className={styles["d-flex"]}>
                                        <div className={styles["ms-4"]}>
                                            <p className={styles["paragraph-info"]}>Label:</p>
                                            <h5 className={styles["mb-0"]}>{vinyl.label}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["col-6"]}>
                                    <div className={styles["d-flex"]}>
                                        <div className={styles["ms-4"]}>
                                            <p className={styles["paragraph-info"]}>Country:</p>
                                            <h5 className={styles["mb-0"]}>{vinyl.country}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["col-6"]}>
                                    <div className={styles["d-flex"]}>
                                        <div className={styles["ms-4"]}>
                                            <p className={styles["paragraph-info"]}>Released:</p>
                                            <h5 className={styles["mb-0"]}>{vinyl.released}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["col-6"]}>
                                    <div className={styles["d-flex"]}>
                                        <div className={styles["ms-4"]}>
                                            <p className={styles["paragraph-info"]}>Genre:</p>
                                            <h5 className={styles["mb-0"]}>{vinyl.genre}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["col-6b"]}>
                                    <div className={styles["d-flexb"]}>
                                        {isOwner && userId && (<>
                                            <Link to={`/vinyls/${vinylId}/edit`} className={styles["btn-class"]}>Edit</Link>
                                            <button onClick={vinylDeleteClickHandler} className={styles["btn-class"]}>Delete</button>
                                            <button onClick={onLikeButtonClick} className={styles["btn-class"]}>{isVinylLikedByCurrentUser ? "Dislike" : "Like"}</button>
                                        </>)}
                                    </div>
                                </div>
                                <div className={styles["col-6"]}>
                                    <div className={styles["d-flex"]}>
                                        <div className={styles["ms-4"]}>
                                            <div className={styles["likes"]}>
                                                <img className="hearts" src="../../../public/images/heart.png" height="30px" width="30px" />
                                                <span id="total-likes">Likes: {vinyl?.likedBy?.length}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles["right-container"]}>
                        <div className={styles["pic-container"]}>
                            <img className={styles["img-position"]}
                                src={vinyl.imageUrl}
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
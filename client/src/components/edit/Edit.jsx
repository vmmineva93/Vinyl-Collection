import { Navigate, useNavigate, useParams } from "react-router";
import { useEditVinyl, useVinyl } from "../../api/vinylApi"
import useAuth from "../../hooks/useAuth";

export default function Edit() {
    const navigate = useNavigate()
    const { userId } = useAuth();
    const { vinylId } = useParams();
    const { vinyl } = useVinyl(vinylId);
    const { edit } = useEditVinyl();

    const formAction = async (formData) => {

        const vinylData = Object.fromEntries(formData);

        await edit(vinylId, vinylData);

        navigate(`/vinyls/${vinylId}/details`);

    }

    const isOwner = userId && userId === vinyl._ownerId;
        if (!isOwner) {
            return <Navigate to="/vinyls"/>
        }

    return (
        <div className="form-wrapper">
            <form action={formAction}>
                <div className="form-group">
                    <label htmlFor="artist"></label>
                    <input type="text" className="form-control" name="artist" id="artist" defaultValue={vinyl.artist} />
                </div>
                <div className="form-group">
                    <label htmlFor="album"></label>
                    <input type="text" className="form-control" name="album" id="album" defaultValue={vinyl.album} />
                </div>
                <div className="form-group">
                    <label htmlFor="label"></label>
                    <input type="text" className="form-control" name="label" id="label" defaultValue={vinyl.label} />
                </div>
                <div className="form-group">
                    <label htmlFor="country"></label>
                    <input type="text" className="form-control" name="country" id="country" defaultValue={vinyl.country} />
                </div>
                <div className="form-group">
                    <label htmlFor="released"></label>
                    <input type="number" className="form-control" name="released" id="released" defaultValue={vinyl.released} />
                </div>
                <div className="form-group">
                    <label htmlFor="genre"></label>
                    <input type="text" className="form-control" name="genre" id="genre" defaultValue={vinyl.genre} />
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl"></label>
                    <input type="text" className="form-control" name="imageUrl" id="imageUrl" defaultValue={vinyl.imageUrl} />
                </div>
                <div className="form-group">
                    <label htmlFor="description"></label>
                    <textarea name="description" className="form-control" id="description" defaultValue={vinyl.description}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

import { useNavigate } from 'react-router';
import { useCreateVinyl } from '../../api/vinylApi'

export default function Create() {
    const navigate = useNavigate();
    const { create: createVinyl } = useCreateVinyl();

    const submitAction = async (formData) => {
        const vinylData = Object.fromEntries(formData);
        try {
            await createVinyl(vinylData);
            navigate('/vinyls');
        } catch (err) {
            alert("Failed to create vinyl ", err);
            navigate('/vinyls');
        }
           
    };
    return (
        <div className="container-create">
            <div className="form-wrapper">
                <h2>Create Vinyl</h2>
                <form action={submitAction}>
                    <div className="form-group">
                        <label htmlFor="artist"></label>
                        <input required type="text" className="form-control" name="artist" id="artist" placeholder="Artist" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="album"></label>
                        <input required type="text" className="form-control" name="album" id="album" placeholder="Album" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="label"></label>
                        <input required type="text" className="form-control" name="label" id="label" placeholder="Label" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country"></label>
                        <input required type="text" className="form-control" name="country" id="country" placeholder="Country" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="released"></label>
                        <input required type="number" className="form-control" name="released" id="released" placeholder="Released" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="genre"></label>
                        <input required type="text" className="form-control" name="genre" id="genre" placeholder="Genre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl"></label>
                        <input required type="text" className="form-control" name="imageUrl" id="imageUrl" placeholder="Image" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"></label>
                        <textarea required name="description" className="form-control" id="description" placeholder="Description"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary new-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}
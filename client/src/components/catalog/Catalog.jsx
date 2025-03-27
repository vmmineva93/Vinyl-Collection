import CatalogVinylItem from "./CatalogVinylItem/CatalogVinylItem";
import { useVinyls } from "../../api/vinylApi";

export default function Catalog() {
    const { vinyls } = useVinyls();
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-primary mb-3 mx-auto"></div>
                    <h1 className="display-5 mb-5">Our Collection</h1>
                </div>
                <div className="row g-4">
                    {vinyls.length > 0
                        ? vinyls.map(vinyl => <CatalogVinylItem key={vinyl._id} {...vinyl} />)
                        : <h3 className="no-articles">No articles yet</h3>
                    }
                </div>
            </div>
        </div>
    );
}
import { useState } from "react";
import CatalogVinylItem from "./CatalogVinylItem/CatalogVinylItem";
import { useVinyls } from "../../api/vinylApi";

export default function Catalog() {
    const { vinyls, isLoading } = useVinyls();
    const [searchTerm, setSearchTerm] = useState('')

    const filteredVinyls = vinyls.filter(item => item?.artist?.toLowerCase().includes(searchTerm.toLowerCase()) || item?.album?.includes(searchTerm.toLowerCase()))


    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (searchTerm) => {
        setSearchTerm(searchTerm)
    }

    if (isLoading) return (<div>Loading...</div>)
    return (
        <div className="container-xxl py-5">
            <form className="search" onSubmit={handleSearchSubmit} >
                <input className="search-input" type="text" value={searchTerm} onChange={(e) => onChange(e.target.value)} />
                <button type="submit " className="new-btn search-btn">Search</button>
            </form>
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="bg-primary mb-3 mx-auto"></div>
                    <h1 className="display-5 mb-5">Our Collection</h1>
                </div>
                <div className="row g-4">
                    {filteredVinyls.length > 0
                        ? filteredVinyls.map(vinyl => <CatalogVinylItem key={vinyl._id} {...vinyl} />)
                        : <h3 className="no-vinyls">No vinyls yet</h3>
                    }
                </div>
            </div>
        </div>
    );
}
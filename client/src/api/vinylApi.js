import useAuth from "../hooks/useAuth";
import request from "../utils/request";
import { useEffect, useState } from "react";

const baseUrl = 'http://localhost:3030/data/vinyls';

export const useVinyls = () => {
    const [vinyls, setVinyls] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        request.get(baseUrl)
            .then((data) => {
                setVinyls(data);
                setIsLoading(false);
            })
            .catch((error) => {
                alert("Error fetching vinyls:", error);
                setIsLoading(false);
            });
    }, []);

    return {
        vinyls,
        isLoading
    }
};

export const useLatestVinyls = () => {
    const [latestVinyls, setLatestVinyls] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_createdOn desc',
            pageSize: 3,
            select: '_id,imageUrl,album,artist',
        })
        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then((data) => setLatestVinyls(data))
            .catch((error) => alert('Error fetching latest vinyls', error))
    }, []);

    return {
        latestVinyls,
    };
};

export const useVinyl = (vinylId) => {
    const [vinyl, setVinyl] = useState({});
    const { request } = useAuth()

    useEffect(() => {
        request.get(`${baseUrl}/${vinylId}`)
            .then((data) => setVinyl(data))
            .catch((error) => alert('Error fetching vinyl', error))
    }, [vinylId])


    return {
        vinyl
    };
};

export const useLikeVinyl = () => {
    const { request, userId } = useAuth()


    const likeVinyl = (vinyl) => {
        const isVinylLikedByCurrentUser = vinyl?.likedBy?.includes(userId);
        const likedBy = isVinylLikedByCurrentUser ? vinyl?.likedBy?.filter(item => item !== userId) : [...vinyl.likedBy, userId]
        return request.put(`${baseUrl}/${vinyl?._id}`, { ...vinyl, likedBy });
    }

    return {
        likeVinyl
    }
}


export const useCreateVinyl = () => {
    const { request } = useAuth();

    const create = (vinylData) => {
        request.post(baseUrl, { ...vinylData, likedBy: [] });
    }

    return {
        create
    }
};

export const useEditVinyl = () => {
    const { request } = useAuth()

    const edit = async (vinylId, vinylData) => {
        try {
            const response = await request.put(`${baseUrl}/${vinylId}`, { ...vinylData, _id: vinylId });
            return response;
        } catch (error) {
            console.error("Error editing vinyl:", error);
            throw error;
        }
    }

    return {
        edit,
    }
};

export const useDeleteVinyl = () => {
    const { request } = useAuth();

    const deleteVinyl = (vinylId) =>
        request.delete(`${baseUrl}/${vinylId}`);

    return {
        deleteVinyl,
    }
};

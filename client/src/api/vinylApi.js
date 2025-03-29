import useAuth from "../hooks/useAuth";
import request from "../utils/request";
import {  useEffect, useState } from "react";

const baseUrl = 'http://localhost:3030/data/vinyls';

export const useVinyls = () => {
    const [vinyls, setVinyls] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setVinyls)
    }, []);

    return {
        vinyls,
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
            .then(setLatestVinyls)
    }, []);

    return {
        latestVinyls,
    };
};

export const useVinyl = (vinylId) => {
    const [vinyl, setVinyl] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${vinylId}`)
            .then(setVinyl);
    }, [vinylId])

    return {
        vinyl,
    };
};

export const useCreateVinyl = () => {
    const { request } = useAuth();

    const create = (vinylData) => {
        request.post(baseUrl, vinylData);
    }

    return {
        create,
    }
};

export const useEditVinyl = () => {
    const { request } = useAuth()

    const edit = (vinylId, vinylData) => 
        request.put(`${baseUrl}/${vinylId}`, { ...vinylData, _id: vinylId });

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

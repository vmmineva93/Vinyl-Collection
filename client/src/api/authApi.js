import { useEffect, useRef } from "react";
import request from "../utils/request";
import { useUserContext } from "../context/UserContext";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    // const abortRef = useRef(new AbortController());

    const login = async (email, password) =>
        request.post(
            `${baseUrl}/login`,
            { email, password },
        )// { signal: abortRef.current.signal });

    // useEffect(() => {
    //     const abortController = abortRef.current
    //     return () => abortController.abort();
    // }, []);

    return {
        login,
    }
};

export const useRegister = () => {
    const abortRef = useRef(new AbortController());
    const register = (email, password) =>
        request.post(`${baseUrl}/register`, { email, password },{ signal: abortRef.current.signal });

     useEffect(() => {
         const abortController = abortRef.current
         return () => abortController.abort();
    }, []);

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useUserContext();

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        const options = {
            headers: {
                'X-Authorization': accessToken,
            }
        };

        request.get(`${baseUrl}/logout`, null, options)
            .finally(userLogoutHandler);

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    };
};

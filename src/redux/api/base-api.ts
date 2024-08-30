// Need to use the React-specific entry point to import createApi
import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import config from '../../config';

const customBaseQuery = async (args: FetchArgs, api: BaseQueryApi, extraOptions: any) => {

    const baseResult = await fetchBaseQuery({
        baseUrl: config.baseUrl, prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    })(
        args,
        api,
        extraOptions
    );

    return baseResult;
};

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: customBaseQuery,
    tagTypes: ["facility", "booking", "slots", "my-bookings"],
    endpoints: () => ({}),
})
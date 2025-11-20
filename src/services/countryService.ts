import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../utils/createBaseQuery";
import type {ICountryItem} from "../types/location/ICountryItem.ts";

export const countryService = createApi({
    reducerPath: 'countryService',
    baseQuery: createBaseQuery('countries'),
    tagTypes: ['Countries'],

    endpoints: (builder) => ({
        getCountries: builder.query<ICountryItem[], void>({
            query: () => {
                return {
                    url: '',
                    method: 'GET'
                };
            },
            providesTags: ["Countries"]
        }),
    }),
});

export const {
    useGetCountriesQuery,
} = countryService;
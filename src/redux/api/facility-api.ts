import { TFacilityData } from "../../type";
import { baseApi } from "./base-api";

export type TGetAllFacilityQueryParams = {
    name: string;
    pricePerHour: string;
    page: any
}

// inject query in base api
const facilityApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // get all facility query
        getAllFacility: build.query({
            query: (paramsArgs: TGetAllFacilityQueryParams) => {
                const paramsObj: TGetAllFacilityQueryParams = { page: paramsArgs.page } as TGetAllFacilityQueryParams

                // if name has a value add name in params
                if (paramsArgs.name) {
                    paramsObj.name = paramsArgs.name
                }

                // if name has a value add name in params
                if (paramsArgs.pricePerHour) {
                    paramsObj.pricePerHour = paramsArgs.pricePerHour
                }

                return {
                    url: '/facility',
                    method: "GET",
                    params: paramsObj
                }
            },
            providesTags: ["facility"]
        }),

        // get single facility query
        getSingleFacility: build.query({
            query: (id: string) => {
                return {
                    url: `/facility/${id}`,
                    method: "GET",
                }
            }
        }),

        // add facility mutation
        addFacility: build.mutation({
            query: (data: TFacilityData) => {
                console.log(data)
                return ({
                    url: '/facility',
                    method: "POST",
                    body: data
                })
            },
            invalidatesTags: ["facility"]
        }),

        // add facility mutation
        updateFacility: build.mutation({
            query: (data: TFacilityData) => {
                return ({
                    url: `/facility/${data._id}`,
                    method: "PUT",
                    body: data
                })
            },
            invalidatesTags: ["facility"]
        }),

        // delete facility mutation
        deleteFacility: build.mutation({
            query: (id: string) => {
                return ({
                    url: `/facility/${id}`,
                    method: "DELETE",
                })
            },
            invalidatesTags: ["facility"]
        })
    }),
})

export const { useGetAllFacilityQuery, useAddFacilityMutation, useDeleteFacilityMutation, useGetSingleFacilityQuery, useUpdateFacilityMutation } = facilityApi
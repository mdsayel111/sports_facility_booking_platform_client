import { TFacilityData } from "../../type";
import { baseApi } from "./base-api";

export type TGetAllFacilityQueryParams = {
    name: string;
    pricePerHour: string;
    page: any
}

// inject query in base api
const bookingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // get all booking query
        getAllBooking: build.query({
            query: () => ({
                url: '/bookings',
                method: "GET",
            }),
            providesTags: ["booking"]
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

export const { useGetAllBookingQuery } = bookingApi
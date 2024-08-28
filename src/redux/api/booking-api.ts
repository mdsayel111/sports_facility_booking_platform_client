import { TBooking, TFacilityData } from "../../type";
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

        // get single booking query
        getSingleBooking: build.query({
            query: (id: string) => {
                return {
                    url: `/bookings/user/${id}`,
                    method: "GET",
                }
            },
        }),

        // get all slots query
        getAvailableSlots: build.query({
            query: (date: string) => {
                return {
                    url: '/check-availability',
                    method: "GET",
                    params: { date }
                }
            },
            providesTags: ["slots"]
        }),

        // add facility mutation
        addBooking: build.mutation({
            query: (data: TBooking) => {
                return ({
                    url: '/bookings',
                    method: "POST",
                    body: data
                })
            },
            invalidatesTags: ["slots"]
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
    }),
})

export const { useGetAllBookingQuery, useGetAvailableSlotsQuery, useAddBookingMutation, useGetSingleBookingQuery } = bookingApi
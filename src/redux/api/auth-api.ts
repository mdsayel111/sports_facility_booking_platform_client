import { TSignUp } from "../../type"
import { baseApi } from "./base-api"

// inject query in base api
const extendedApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // signup mutation
        signUp: build.mutation({
            query: (data: TSignUp) => ({
                url: '/auth/signup',
                method: "POST",
                body: data
            }),
        }),
        // login mutation
        logIn: build.mutation({
            query: (data: Pick<TSignUp, "email" | "password">) => ({
                url: '/auth/login',
                method: "POST",
                body: data
            }),
        }),
    }),
    overrideExisting: false,
})

export const { useSignUpMutation, useLogInMutation } = extendedApi
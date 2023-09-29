import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (logindata) => ({
        url: "/auth/login",
        method: "POST",
        data: logindata,
      }),
      invalidatesTags: ["user"],
    }),
  }),
  overrideExisting: false,
});

export const { useUserLoginMutation } = authApi;

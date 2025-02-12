import { IApiResponse } from "../../common/interfaces";
import { Build } from "../../common/models/Build";
import { apiSlice } from "../api";

export const environmentDetailsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBuild: builder.query<IApiResponse<Build>, number | undefined>({
      query: buildId => `/api/v1/build/${buildId}/`,
      keepUnusedDataFor: 0
    }),
    createOrUpdate: builder.mutation({
      query: code => ({
        url: "/api/v1/specification/",
        method: "POST",
        body: code
      })
    })
  })
});

export const { useGetBuildQuery, useCreateOrUpdateMutation } =
  environmentDetailsApiSlice;

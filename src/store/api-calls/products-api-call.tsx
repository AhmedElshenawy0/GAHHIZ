import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productSlice = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:1337/api/products`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer f5a97047072164075cf5ee550fc5566ecc05e21c65436ab7a4fc007dc840a24570d446e286a33f9c8ff7e2b8825c865a95e09e8e68ef023cf9debbc99e1d3f32aa7551c3c9bacf2addd94c5c9c169759d53fb1f24a183884eb602da737e967850b530d020277fcfaae995465c3f7c1e5934f574d3b104ae0105c71b7851f966f`
      );

      return headers;
    },
  }),
  tagTypes: ["products"],

  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/?populate=*",
      providesTags: ["products"],
    }),
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: builder.mutation({
      query: (unique_code) => ({
        url: `/${unique_code}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productSlice;

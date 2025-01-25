import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9080/api/v1',
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        // Main Category
        getCategory: builder.query({
            query: () => '/category/get-category'
        }),
        addCategory: builder.mutation({
            query: () => ({
                
            })
        })
    })
});

export const {
    useGetCategoryQuery,
} = categoryApi;
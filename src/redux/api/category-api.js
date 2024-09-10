import { api } from "./index";

export const usersApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query({
            query: (params) => ({
                url: "/users",
                params,
            }),
            providesTags: ["Users"],
        }),
        createUsers: build.mutation({
            query: (body) => ({
                url: "/users",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Users"],
        }),
        deleteUsers: build.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Users"],
        }),
        updateUsers: build.mutation({
            query: ({ id, body }) => ({
                url: `/users/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Users"],
        }),
    }),
});

// GET -> build.query
// POST, PUT, PATCH, DELETE -> build.mutation

export const {
    useCreateUsersMutation,
    useDeleteUsersMutation,
    useGetUsersQuery,
    useUpdateUsersMutation,
} = usersApi;

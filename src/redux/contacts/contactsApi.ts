// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {IContactsResponse, IContactsQuery} from './types'
// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7777/' }),
  tagTypes: ['create', 'update', 'delete'],
  endpoints: (builder) => ({
    getAllContacts: builder.query<IContactsResponse[], void>({
      query: () => `contacts`,
      providesTags: ['create', 'update', 'delete']
    }),
    getContacts: builder.query<IContactsResponse[], number>({
      query: (page) => `contacts?_page=${page}&_limit=4`,
      providesTags: ['create', 'update', 'delete']
    }),
    getSearchContacts: builder.query<IContactsResponse[], string>({
      query: (query) => `contacts?q=${query}`,
      providesTags: ['create', 'update', 'delete']
    }),
    addContact: builder.mutation<IContactsResponse, IContactsQuery>({
      query: (params) => ({
          url: 'contacts',
          method: 'POST',
          body: params
      }),
      invalidatesTags: ['create']
    }),
    updateContact: builder.mutation<IContactsResponse, IContactsQuery>({
      query: (params) => ({
          url: `contacts/${params.id}`,
          method: 'PATCH',
          body: params
      }),
      invalidatesTags: ['update']
    }),
    deleteContact: builder.mutation<void, number>({
      query: (id) => ({
          url: `contacts/${id}`,
          method: 'DELETE'
      }),
      invalidatesTags: ['delete']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetAllContactsQuery,
  useGetContactsQuery,
  useLazyGetContactsQuery,
  useLazyGetSearchContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi
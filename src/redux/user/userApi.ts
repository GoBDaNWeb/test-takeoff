// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {login} from './userSlice'
import {IUser} from './types'
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:7777/',
  prepareHeaders: (headers, { getState }) => {
    const user = window.localStorage.getItem('user')

    if (user) {
      headers.set('authorization', `${user}`)
    }

    return headers
  },
})

const baseQueryWithAuth: BaseQueryFn<
string | FetchArgs,
unknown,
FetchBaseQueryError
>  = async (args, api, extraOptions) => {
  let result: any = await baseQuery(args, api, extraOptions)
  if (result.data && window.localStorage.getItem('user')) {
    console.log(result)
      api.dispatch(login(result?.data || null))
  }

  return result
}


// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithAuth,
  tagTypes: ['create', 'update', 'delete'],
  endpoints: (builder) => ({
    getAuthData: builder.query<IUser, void>({
      query: () => `auth`,
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetAuthDataQuery,
} = userApi
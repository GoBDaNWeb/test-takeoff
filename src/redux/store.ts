import { configureStore } from '@reduxjs/toolkit'
import {userReducer} from './user/userSlice'
import {contactsReducer} from './contacts/contactsSlice'
import {contactsApi} from './contacts/contactsApi'
import {userApi} from './user/userApi'

export const store = configureStore({
	reducer: {
		user: userReducer,
		contacts: contactsReducer,
		[contactsApi.reducerPath]: contactsApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
    	getDefaultMiddleware()
			.concat(
				contactsApi.middleware, 
				userApi.middleware
			)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
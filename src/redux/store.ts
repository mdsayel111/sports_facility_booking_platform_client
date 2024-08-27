import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/base-api'
import authReducer from './slices/auth-slice'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';

// persist config
const persistConfig = {
    key: 'auth',
    storage,
}

// persist reducer
const authPersistedReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [baseApi.reducerPath]: baseApi.reducer,
        auth: authPersistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore actions that come from redux-persist
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }).concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './react-router-dom/router.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/integration/react';
import ThemeProvider from './themeProvider/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider colorPrimary="#FD1E50" colorBgContainer="#ffff">
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
      <Toaster />
    </Provider>
  </StrictMode>,
)

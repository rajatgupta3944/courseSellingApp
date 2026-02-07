import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/reset.css'
import './styles/global.scss'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { AuthProvider } from "react-oidc-context";
import { cognitoAuthConfig } from "./features/auth/cognito/cognitoAuthConfig.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
      </AuthProvider>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Store/store.ts'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain='dev-ia0f4b23mn4ra177.us.auth0.com'
        clientId='t3UJowSFsfx8sExgSlX6yGHOtcKYXcXF'
        authorizationParams={{ audience: 'https://edify-hrms-api.com', redirect_uri: window.location.origin }}>
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
)

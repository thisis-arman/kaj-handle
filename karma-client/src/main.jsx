import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import UserProvider from './Provider/UserProvider'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UserProvider>

  </React.StrictMode >,
)

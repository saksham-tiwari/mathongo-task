import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from "../redux/store"
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  useEffect(()=>{},[])
  return <Provider store= {store}>
    <Component {...pageProps}/>
  </Provider>
}

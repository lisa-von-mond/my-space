import '../styles/globals.css'
import { Loader } from '../components/loader'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {

const [loading, setLoading] = useState(false);

useEffect(() => {
  setTimeout(() => setLoading(true), 4000);
  }, []);


  return(
    <>
  {loading ? (
  <Component {...pageProps} />
  ) : (
    <Loader />
  )}
  </>)
}

export default MyApp
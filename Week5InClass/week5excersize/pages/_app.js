import '@/styles/globals.css'
import Layout from '@/src/components/Layout'
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps}/>
      <div>test this inside _app </div>
    </Layout>
      
    )

}
export default MyApp;
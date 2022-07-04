import '../styles/globals.css';
import Common from "../components/Common";

function MyApp({ Component, pageProps }) {
  return (
    <Common>
      <Component {...pageProps} />
    </Common>
  )
}

export default MyApp

import NavBar from "../components/Navbar"
import Layout from "../components/Layout"
import { NextComponentType } from "next"
import { AppContext, AppInitialProps, AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import { PortfolioProvider } from "../components/context/context"
import { prefix } from "../config/config"
import { Provider } from 'react-redux';
import store from '../redux/store';


const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  return (
    <PortfolioProvider value={{ prefix }}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </PortfolioProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }


  return { pageProps };
}



export default MyApp;
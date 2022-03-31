import { AppProps } from 'next/app';
import { CustomThemeProvider } from '../contexts/CustomThemeContext';
import { FakeAuthProvider } from '../contexts/FakeAuthContext';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FakeAuthProvider>
      <CustomThemeProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </CustomThemeProvider>
    </FakeAuthProvider>
  );
}

export default MyApp

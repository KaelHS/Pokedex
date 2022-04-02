import { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
// import Cookies from 'universal-cookie';
import { lightTheme, darkTheme } from '../styles/themes';
import { parseCookies, setCookie, destroyCookie } from 'nookies'

interface IThemeContextData {
  theme: DefaultTheme;
  changeTheme(theme: DefaultTheme): void;
}


interface ICustomThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export const CustomThemeProvider = ({ children }: ICustomThemeProviderProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  useEffect(() => {
    // const themeLoaded = parseCookie('theme');

    // if (themeLoaded) {
    //   setTheme(themeLoaded);
    // }
  }, []);

  const changeTheme = useCallback((newTheme: DefaultTheme) => {
    setTheme(newTheme);
    destroyCookie(null, 'theme');
    setCookie(null, 'theme', newTheme.name, {
      path: '/',
      maxAge: 30 * 24 * 60 * 60 //verificar
    });
  }, []);

  return (
    <CustomThemeContext.Provider
      value={{
        theme,
        changeTheme,
        // acceptCookies,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

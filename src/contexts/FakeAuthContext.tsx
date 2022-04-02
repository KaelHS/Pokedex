import { createContext, useState, useEffect, useContext } from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { useRouter } from 'next/router';
import { usePokemon } from './PokemonContext';

interface IFakeAuthContextData {
    signIn: (name: string) => void;
    signOut: () => void;
    isAuthenticated: boolean;
}

interface IFakeAuthProviderProps {
    children: React.ReactNode;
}

export const FakeAuthContext = createContext<IFakeAuthContextData>({} as IFakeAuthContextData);

export const FakeAuthProvider = ({ children }: IFakeAuthProviderProps) => {

    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const { setSelectedPokemon } = usePokemon();
    const router = useRouter();

    useEffect( () => {
        loadUserFromCookies();
    }, []);

    const signIn = ( name: string ) => {

        try {
            setCookie(null, 'name', name, {
                path: '/',
                maxAge: 30 * 24 * 60 * 60 //verificar
            });
            setIsAuthenticated(true);
            router.push('/dashboard');
        } catch (error) {
            console.log(error);
        }

    }

    const signOut = () => {
        try {
            destroyCookie(null, 'name');
            setIsAuthenticated(false);
            router.push('/');
            setSelectedPokemon(undefined);

        } catch(error) {
            console.log(error);
        }

    }

    const loadUserFromCookies = () => {
        const { name } = parseCookies();

        if (name) {
            router.push('/dashboard');
            signIn(name);
        }
    }

    return (
        <FakeAuthContext.Provider value={{signIn,signOut, isAuthenticated}} >
            {children}
        </FakeAuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(FakeAuthContext);

    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }

    return context;
};


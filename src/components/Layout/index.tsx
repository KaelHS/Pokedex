import React, { ReactNode }from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import { LayoutContainer } from './styled';

interface ILayoutProps {
    pokemonName?: string;
    children: ReactNode;
}

export const Layout = ({ pokemonName, children}: ILayoutProps) => {

    return(
        <LayoutContainer>
            <Sidebar />
            <div className='content'>
                <Header pokemonName={pokemonName} />
                {children}
            </div>
        </LayoutContainer>
        
    );
}

export default Layout;
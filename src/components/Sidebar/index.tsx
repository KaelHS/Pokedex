import Image from 'next/image';
import React , { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { SidebarContainer } from './style';

const Sidebar = () => {

    // const { userSigned, signed } = useAuth();
    const [pinned, setPinned] = useState(true);
    const [search, setSearch] = useState('');

  return (
    <SidebarContainer>
        <header>
          <div className='logoSection'>
            <Image className="pokeballLogo" src="/icons/pokeball.svg" alt="pokeball icon" width={30} height={30} />
            <h1>POKEDEX</h1>
          </div>
          <span>Everything you wanted to know about your favorite pocket monsters!</span>
          <div className="searchBox">
              <input 
                  type="text"
                  placeholder="Search by name or number" 
                  value={search}
                  onChange={ ({target}) => setSearch(target.value)}
              />
              <FaSearch />
          </div>
        </header>

    </SidebarContainer>

  );
};

export default Sidebar;
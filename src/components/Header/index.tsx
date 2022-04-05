import { useState, useContext, useEffect, useCallback } from 'react';
import { RiMoonFill, RiSunFill, RiLogoutCircleRFill } from 'react-icons/ri';
import { ThemeContext } from 'styled-components';
import Container from './style';
import { CustomThemeContext } from '../../contexts/CustomThemeContext';
import { lightTheme, darkTheme, highContrast } from '../../styles/themes';
import { Switcher } from '../Switcher';
import { capitalize } from '../helpers/capitalize';
import { useAuth } from '../../contexts/FakeAuthContext';
import { usePokemon } from '../../contexts/PokemonContext';
import Image from 'next/image';

interface IHeaderProps {
  pokemonName?: string;
  userName?: string;
}

const Header = ({ pokemonName, userName }: IHeaderProps) => {

  const { theme, changeTheme } = useContext(CustomThemeContext);
  const { name, colors } = useContext(ThemeContext);
  const { selectedPokemon } = usePokemon();
  const [ isToggled, setIsToggled ] = useState<boolean>(false);
  const { signOut } = useAuth();

  const handleLogout = () => {

    signOut();
  }

  return (
    <Container>
      <section className='infoView'>
        { console.log(selectedPokemon)}
        { selectedPokemon && 
          <>
            <h1>{capitalize(selectedPokemon?.name)}</h1>
            <Image src={selectedPokemon?.image} alt={selectedPokemon?.name} height={100} width={100}/>
          </>
        }
      </section>
      <div className='actions'>
        <div className="themeArea">
          { isToggled ? changeTheme(darkTheme) : changeTheme(lightTheme) }
          <RiSunFill color={ isToggled ? 'gray' : 'yellow' }/>
          <Switcher isToggled={ isToggled } onToggle={ () => setIsToggled(!isToggled)} />
          <RiMoonFill color={ isToggled ? 'blue' : 'gray' } />
        </div>
        <button type="button" className='logoutButton' onClick={ () => handleLogout() }>
          <RiLogoutCircleRFill color={ colors.red }/>
        </button>
      </div>

    </Container>
  );
};

export default Header;
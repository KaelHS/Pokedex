import { useState, useContext, useEffect, useCallback } from 'react';
import { RiMoonFill, RiSunFill, RiLogoutCircleRFill } from 'react-icons/ri';
import { ThemeContext } from 'styled-components';
import Container from './style';
import { CustomThemeContext } from '../../contexts/CustomThemeContext';
import { lightTheme, darkTheme, highContrast } from '../../styles/themes';
import { Switcher } from '../Switcher';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../contexts/FakeAuthContext';
import { usePokemon } from '../../contexts/PokemonContext';

interface IHeaderProps {
  pokemonName?: string;
  userName?: string;
}

const Header = ({ pokemonName, userName }: IHeaderProps) => {

  const { theme, changeTheme } = useContext(CustomThemeContext);
  const { name, colors } = useContext(ThemeContext);
  const { } = usePokemon();
  const [ isToggled, setIsToggled ] = useState<boolean>(false);
  const { signOut } = useAuth();

  const handleLogout = () => {

    signOut();
  }

  return (
    <Container>
      <h1>Nome do Pokemon</h1>
      <div className='actions'>
        <div className="themeArea">
          { isToggled ? changeTheme(darkTheme) : changeTheme(lightTheme) }
          <RiMoonFill color={ isToggled ? 'gray' : 'blue' }/>
          <Switcher isToggled={ isToggled } onToggle={ () => setIsToggled(!isToggled)} />
          <RiSunFill color={ isToggled ? 'yellow' : 'gray' } />
        </div>
        <button type="button" className='logoutButton' onClick={ () => handleLogout() }>
          <RiLogoutCircleRFill color={ colors.red }/>
        </button>
      </div>

    </Container>
  );
};

export default Header;
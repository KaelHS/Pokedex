import { FormEvent, useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { ThemeContext } from 'styled-components';
import { Container } from './style';
import { useAuth } from '../contexts/FakeAuthContext';
import Dashboard from './dashboard';

const Login = () => {

  const { colors } = useContext(ThemeContext);
  const { signIn, isAuthenticated } = useAuth();

  const [ name, setName ] = useState<string>('');
  const [ email, setEmail ] = useState<string>('');

  function handleSubmit(e: FormEvent) {

    e.preventDefault();
    signIn(name);

  }

  if(isAuthenticated) {
    return <Dashboard />
  }

  return (
    <Container>
      <div className="content">
        <div className="logoContainer">
          <Image className='logoImage' src="/icons/pokeball1.png" alt="logoImage" width={70} height={70} />
          <h1>POKEDEX</h1>
        </div>
        <form className="form-area" onSubmit={(event)=> handleSubmit(event)}>
          <div className="loginInputsContainer">
            <h1>LOGIN</h1>
            <input
              type="text"
              value={name}
              name="name"
              onChange={ ({target}) => setName(target.value) }
              required
              placeholder="Nome"
            />
            <input
              type="text"
              value={email}
              name="email"
              onChange={ ({target}) => setEmail(target.value) }
              required
              placeholder="E-mail"
            />

          </div>
          <button type="submit" className='loginButton'>
            Entrar
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Login;

/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import { ImSpinner } from 'react-icons/im';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg) ;
  }
`;

export const SpinnerContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  position: absolute;
  backdrop-filter: blur(2px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  img {
    animation: ${spin} 1s linear infinite;
  }
`;

export function Loading() {

  return (
  <SpinnerContainer>
    <img src="/icons/pokeball.svg" alt="pokeball icon" />
  </SpinnerContainer>
  );
}
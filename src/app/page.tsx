import { Center } from '@mantine/core';
import { StyledMain } from './page.styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'trisquare'
}

export default function LandingPage() {
  return (
    <StyledMain>
      <Center h={'100%'}>
        <h1>trisquare.eu</h1>
      </Center>
    </StyledMain>
  );
}

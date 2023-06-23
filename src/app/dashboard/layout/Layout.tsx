'use client';

import {chakra, useDisclosure, Container} from '@chakra-ui/react';
import {ReactNode} from 'react';
import SideBar from '../../../components/Dashboard/SideBar';
import NavBar from '../../../components/Dashboard/NavBar';

type Props = {
  children: ReactNode;
};

function Layout({children}: Props) {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <chakra.main>
      <SideBar isOpen={isOpen} onClose={onClose} />
      <chakra.div pl={{lg: '200px'}}>
        <NavBar onOpen={onOpen} />
        <Container maxW="1050px">
          <chakra.div mt="20px" ml={{base: '0', lg: '10px'}}>{children}</chakra.div>
        </Container>
      </chakra.div>
    </chakra.main>
  );
}

export default Layout;

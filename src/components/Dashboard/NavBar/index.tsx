import React from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

type Props = {
  onOpen: () => void;
};

export default function NavBar({onOpen}: Props) {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar onOpen={onOpen} />
    </>
  );
}

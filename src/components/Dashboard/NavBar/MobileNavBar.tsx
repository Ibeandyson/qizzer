import HamburgerIcon from "@/components/SVG-Icons/HamburgerIcon";
import { chakra, IconButton } from "@chakra-ui/react";

type Props = {
  onOpen: () => void;
};

export default function MobileNavBar({ onOpen }: Props) {
  return (
    <>
      <chakra.div
        display={{ base: "flex", lg: "none" }}
        alignItems="center"
        justifyContent="space-between"
        h="51px"
        boxShadow="4px 4px 8px rgba(0, 0, 0, 0.08)"
        px="24px"
        zIndex="10"
        top={0}
        left={0}
        bg="#ffffff"
        position="sticky"
      >
        <chakra.div display="flex" alignItems="center" gap="8px">
          <chakra.img src="/imgs/mobile-nav-logo.svg" alt="logo" w="24px" />
          <chakra.p fontSize="16px" fontWeight={700} color="#220075">
            TrustPaddi
          </chakra.p>
        </chakra.div>
        <IconButton
          aria-label="hamburger"
          icon={<HamburgerIcon />}
          bg="#E9E6F1"
          onClick={onOpen}
        />
      </chakra.div>
      <chakra.div px="24px" pt="24px" display={{ base: "block", lg: "none" }}>
        <chakra.p fontSize="16px" fontWeight="500" color="#000000">
          Welcome Synclaire,
        </chakra.p>
        <chakra.p
          color="#7A7A7A"
          fontSize="12px"
          fontWeight="400"
          lineHeight="18.62px"
          mt="10px"
        >
          Here’s what is happening in your <br /> TrustPaddi Wallet today.
        </chakra.p>
      </chakra.div>
    </>
  );
}

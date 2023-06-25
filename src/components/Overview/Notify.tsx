import React, { useState } from "react";
import { chakra } from "@chakra-ui/react";

function Notify() {
  const [showNotify, setShowNotify] = useState<boolean>(true);

  return (
    <>
      {showNotify ? (
        <chakra.div
          pos="relative"
          display={{ base: "none", lg: "block" }}
          w="full"
          h="103px"
          bg="#220075"
          borderRadius="8px"
        >
          <chakra.button
            onClick={() => setShowNotify(false)}
            pos="absolute"
            top="-10px"
            right="-10px"
          >
            <chakra.img src="/imgs/Close_MD.svg" alt="notifi" />
          </chakra.button>
          <chakra.div
            display="flex"
            h="full"
            alignItems="center"
            gap="20px"
            px={{ base: "30px", lg: "60px", xl: "100px" }}
          >
            <chakra.img src="/imgs/notifi.svg" alt="notifi" />

            <chakra.p fontSize="15px" fontWeight="500" color="#FFF">
              To protect your Paddi Wallet set up a strong and unique pin Now.
              This pin should never be shared with anyone, and you should take
              care to keep it confidential.
            </chakra.p>
          </chakra.div>
        </chakra.div>
      ) : null}
    </>
  );
}

export default Notify;

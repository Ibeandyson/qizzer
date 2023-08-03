import React from "react";
import { chakra } from "@chakra-ui/react";
import InfoCardIcon from "@/components/SVG-Icons/InfoCardIcon";

type Props = {
  label: string;
  iconColor: string;
};

const InfoCard = ({ label, iconColor }: Props) => {
  return (
    <chakra.div
      w={{ base: "273px", lg: "320px" }}
      h={{ base: "197px", lg: "230px" }}
      minW={{ base: "273px", lg: "320px" }}
      borderRadius={{ base: "9.485px", lg: "11.093px" }}
      border="0.5px  solid #7A7A7A66"
      px={{ base: "30px", lg: "25" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <chakra.div>
        <chakra.p
          fontSize={{ base: "17.101px", lg: "20px" }}
          fontWeight={400}
          color="#1E1E1E"
        >
          {label}
        </chakra.p>
        <chakra.p
          fontSize={{ base: "34.201px", lg: "40px" }}
          fontWeight={500}
          color="#1E1E1E"
          mt="10px"
        >
          40
        </chakra.p>
      </chakra.div>
      <InfoCardIcon color={iconColor} />
    </chakra.div>
  );
};

export default InfoCard;

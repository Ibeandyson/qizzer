import { Input, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  placeHolder?: string;
  disable?: boolean;
  onchange: (e: any) => void;
  name?: string;
  value: string | number;
  lable?: string;
  style?: React.CSSProperties;
  type: string;
};
const InputUI = ({
  type,
  placeHolder,
  onchange,
  disable,
  value,
  name,
  lable,
  style,
}: Props) => {
  return (
    <div style={style}>
      <Text
        textAlign="start"
        color="#1E1E1E"
        fontWeight="500"
        fontSize={{ base: "14px", lg: "16px" }}
        mb="8px"
      >
        {lable}
      </Text>
      <Input
        type={type}
        value={value}
        name={name}
        disabled={disable}
        placeholder={placeHolder}
        onChange={onchange}
        w={{ base: "full" }}
        h={{ base: "40px", lg: "51px" }}
        borderColor="#7A7A7A"
        border="solid 1px"
        _focus={{ borderColor: "#220075" }}
      />
    </div>
  );
};

export default InputUI;

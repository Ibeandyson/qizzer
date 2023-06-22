import {Input, Text} from '@chakra-ui/react';
import React from 'react';

type Props = {
  placeHolder?: string;
  disable?: boolean;
  onchange: () => void;
  name?: string;
  value: string | number;
  lable?: string;
  style?: React.CSSProperties;
  type: string;
};
const InputUI = ({type, placeHolder, onchange, disable, value, name, lable, style}: Props) => {
  return (
    <div style={style}>
      <Text textAlign="start" color="#1E1E1E" fontWeight="500" fontSize="12" mb="8px">
        {lable}
      </Text>
      <Input
        w={{base: 'full'}}
        h={{base: '40px', lg: '51px'}}
        type={type}
        borderColor="#7A7A7A"
        border="solid 1px"
        placeholder={placeHolder}
        onChange={onchange}
        disabled={disable}
        name={name}
        value={value}
      />
    </div>
  );
};

export default InputUI;

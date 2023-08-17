'use client';
import { Select, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {
  placeHolder?: string;
  disable?: boolean;
  onchange: (e: any) => void;
  name?: string;
  lable?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const SelectUI = ({ placeHolder, onchange, disable, name, lable, style, children }: Props) => {
  return (
    <div style={style}>
      <Text textAlign="start" color="#1E1E1E" fontWeight="500" fontSize={{ base: '14px', lg: '16px' }} mb="8px">
        {lable}
      </Text>
      <Select
        w={{ base: 'full' }}
        h={{ base: '40px', lg: '51px' }}
        borderColor="#7A7A7A"
        border="solid 1px"
        _focus={{ borderColor: '#220075' }}
        name={name}
        disabled={disable}
        onChange={onchange}
        placeholder={placeHolder}
      >
        {children}
      </Select>
    </div>
  );
};

export default SelectUI;

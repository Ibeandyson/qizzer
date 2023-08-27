import ButtonUI from '@/components/ReuseableComponents/ButtonUI';
import InputUI from '@/components/ReuseableComponents/InputUI';
import React from 'react';
import { chakra } from '@chakra-ui/react';
import { useState, ChangeEvent } from 'react';
import { createStoreType } from '@/types/store';
import useStore from '@/global/hooks/useStore';

type Props = {};

function CreateStore({}: Props) {
  const { createStore } = useStore();
  const [createStoreData, setCreateStoreData] = useState<createStoreType>({
    storeName: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    zip: '',
    logo: '',
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateStoreData({ ...createStoreData, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    createStore(createStoreData);
  };

  return (
    <chakra.div>
      <chakra.div
        bg="#D9D9D9"
        h="100px"
        w="100px"
        mx="auto"
        borderRadius="full"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <chakra.img src="/icons/ic_round-cloud-upload.svg" alt="ic_round-cloud-upload" />
        <chakra.p fontSize="10px">Upload Logo</chakra.p>
      </chakra.div>
      <chakra.div mt="30px" display="grid" gap="20px" gridTemplateColumns={{ lg: 'repeat(2, 1fr)' }}>
        <InputUI value={createStoreData.storeName} type="text" lable="Store Name *" name="storeName" onchange={(e) => onChangeInput(e)} />
        <InputUI value={createStoreData.address} type="text" lable="Shop address *" name="address" onchange={(e) => onChangeInput(e)} />
        <InputUI value={createStoreData.city} type="text" lable="City *" name="city" onchange={(e) => onChangeInput(e)} />
        <InputUI value={createStoreData.state} type="text" lable="State *" name="state" onchange={(e) => onChangeInput(e)} />
        <InputUI value={createStoreData.zip} type="text" lable="Postal Code" name="zip" onchange={(e) => onChangeInput(e)} />
        <InputUI value={createStoreData.phone} type="text" lable="Account manager phone number *" name="phone" onchange={(e) => onChangeInput(e)} />
      </chakra.div>
      <chakra.div display="flex" justifyContent="center" my="30px">
        <ButtonUI label="Create Store" w="430px" onClick={onSubmit} />
      </chakra.div>
    </chakra.div>
  );
}

export default CreateStore;

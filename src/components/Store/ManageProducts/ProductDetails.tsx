import React, { useState } from "react";
import { chakra } from "@chakra-ui/react";

type Props = {};

const ProductDetails = (props: Props) => {
  const [imageIndex, setImageIndex] = useState<number>(1);

  const productImages = [
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  ];

  return (
    <chakra.div display="grid" gridTemplateColumns={{ lg: "60% 40%" }}>
      <chakra.div
        display="grid"
        gridTemplateColumns={{ lg: "20% 80%" }}
        h={{ base: "234px", lg: "667px" }}
      >
        <chakra.div
          display="flex"
          flexDir="column"
          gap={{ base: "10px", lg: "20px" }}
          h="full"
          overflowY="scroll"
          pr={{ base: "5px", lg: "10px" }}
        >
          {productImages.map((imgSrc, index) => (
            <chakra.img
              key={index}
              src={imgSrc}
              alt="product"
              w={{ base: "49px", lg: "124px" }}
              h={{ base: "52px", lg: "150px" }}
              borderRadius="4px"
              objectFit="cover"
              cursor="pointer"
              onClick={() => setImageIndex(index)}
            />
          ))}
        </chakra.div>
        <chakra.img
          src={productImages[imageIndex]}
          alt="product"
          borderRadius="4px"
        />
      </chakra.div>
      <chakra.div></chakra.div>
    </chakra.div>
  );
};

export default ProductDetails;

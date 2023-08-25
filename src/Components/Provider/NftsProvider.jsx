import { createContext, useContext, useState } from "react";

const nftProductsContext = createContext();

const NftsProvider = ({ children }) => {
  const [nft, setNft] = useState([
    {
      id: 1,
      name: "ape khaste",
      price: 45,
      price_unit: "fi fi-brands-bitcoin",
      description: "aas7865465safssssssssssssssss",
    },
  ]);
  return (
    <nftProductsContext.Provider value={{ nft, setNft }}>
      {children}
    </nftProductsContext.Provider>
  );
};

export default NftsProvider;

export const useNft = () => useContext(nftProductsContext);

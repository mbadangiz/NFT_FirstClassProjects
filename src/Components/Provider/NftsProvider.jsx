import { createContext, useContext, useState } from "react";

const nftProductsContext = createContext();

const NftsProvider = ({ children }) => {
  const [nft, setNft] = useState([
    {
      id: 1,
      name: "Ahmad Ali Ghorbani",
      price: 45,
      price_unit: "fi fi-brands-bitcoin",
      description: "This is Ahmad ali a kind man fro south africa.",
    },
    {
      id: 2,
      name: "Mahmoud Joon",
      price: 52,
      price_unit: "fi fi-brands-bitcoin",
      description: "Mahmoud Joon is very kind man he loves flowers.",
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

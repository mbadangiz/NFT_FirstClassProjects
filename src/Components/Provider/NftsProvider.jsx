import { createContext, useContext, useState } from "react";

const nftProductsContext = createContext();

const NftsProvider = ({ children }) => {
  const [nft, setNft] = useState([
    {
      id: 1,
      name: "Ahmad Ali Ghorbani",
      img: "img1.jpg",
      price: 45,
      price_unit: "fi fi-brands-bitcoin",
      description: "This is Ahmad ali a kind man fro south africa.",
      like: 14,
      authorName: "MohammadAli",
      authorId: "@EbneZiad",
    },
    {
      id: 2,
      name: "Mahmoud Joon",
      img: "img2.jpg",
      price: 52,
      price_unit: "fi fi-brands-bitcoin",
      description: "Mahmoud Joon is very kind man he loves flowers.",
      like: 60,
      authorName: "MirzaKochak Khan",
      authorId: "@Shemr",
    },
    {
      id: 3,
      name: "Gorile Khaste",
      img: "img3.jpg",
      price: 20,
      price_unit: "fi fi-brands-bitcoin",
      description:
        "Goril is so lovely Heyvan And Because of his love to humens society is begin ensan",
      like: 8,
      authorName: "Rostam",
      authorId: "@OmarSad",
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

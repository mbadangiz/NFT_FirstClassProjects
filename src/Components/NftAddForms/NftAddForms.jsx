import { useNft } from "../Provider/NftsProvider";
import UserForm from "../UserForm/UserForm";

const NftAddForm = () => {
  const nft = useNft();
  // {
  //   id: 1,
  //   name: "Ahmad Ali Ghorbani",
  //   img: "img1.jpg",
  //   price: 45,
  //   price_unit: "fi fi-brands-bitcoin",
  //   description: "This is Ahmad ali a kind man fro south africa.",
  //   like: 14,
  //   authorName: "MohammadAli",
  //   authorId: "@EbneZiad",

  // },
  const addNftProdutcsHandler = (val) => {
    const nftObj = {
      id: nft.nft.length + 1,
      img: "img1.jpg",
      name: val.name,
      price: val.price,
      price_unit: val.price_unit,
      description: val.description,
      like: 0,
      authorName: "AbouBakr",
      authorId: "@MirzaKochakKhan",
    };
    nft.setNft([...nft.nft, nftObj]);
    val.name = "";
    val.price = "";
    val.price_unit = "";
    val.description = "";
  };
  const initVals = {
    name: "",
    price: "",
    price_unit: "fi fi-brands-bitcoin",
    description: "",
  };
  return <UserForm FormHandler={addNftProdutcsHandler} initValue={initVals} />;
};

export default NftAddForm;

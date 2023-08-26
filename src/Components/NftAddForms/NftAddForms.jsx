import { useNft } from "../Provider/NftsProvider";
import UserForm from "../UserForm/UserForm";

const NftAddForm = () => {
  const nft = useNft();

  const addNftProdutcsHandler = (val) => {
    const nftObj = {
      id: nft.nft.length + 1,
      name: val.name,
      price: val.price,
      price_unit: val.price_unit,
      description: val.description,
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

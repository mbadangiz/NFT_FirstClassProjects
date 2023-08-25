import { Form, Formik } from "formik";
import InputText from "../Common/Inputs/Inputs";
import SelectOption from "../Common/SelectOption/SelectOption";
import TextArea from "../Common/TextArea/TextArea";
import Button from "../Common/Button/Button";
import { useNft } from "../Provider/NftsProvider";

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

  const Options = [
    { id: 2, val: "fi fi-brands-ethereum", title: "Ethereum", selected: false },
    { id: 1, val: "fi fi-brands-bitcoin", title: "Bitcoin", selected: true },
    {
      id: 3,
      val: "fi fi-br-litecoin-sign",
      title: "Litecoin",
      selected: false,
    },
  ];
  return (
    <>
      <Formik
        className="relative"
        initialValues={{ name: "", price: "", price_unit: "", description: "" }}
        onSubmit={(values) => addNftProdutcsHandler(values)}
      >
        <Form className="relative space-y-6">
          <InputText placeholder="NFT`s Name" inputType="text" name="name" />

          <div className="flex justify-between h-11">
            <InputText
              placeholder="NFT`s Price"
              inputType="number"
              name="price"
            />
            <SelectOption Options={Options} name="price_unit" />
          </div>

          <TextArea
            textAreaName="description"
            placeholder="NFT`s Description"
          />

          <Button type="submit" innerText="Submit Informations" />
        </Form>
      </Formik>
    </>
  );
};

export default NftAddForm;

import NftManageTitles from "../NftManageTitles/NftManageTitles";
import { useNft } from "../Provider/NftsProvider";
import { Form, Formik } from "formik";
import InputText from "../Common/Inputs/Inputs";
import SelectOption from "../Common/SelectOption/SelectOption";
import TextArea from "../Common/TextArea/TextArea";
import Button from "../Common/Button/Button";

const ModalUpdate = ({ nftId, upDisplayHandler, upDdisplayProp }) => {
  const nft = useNft();
  // console.log(upDisplayHandler);
  const Options = [
    { id: 1, val: "fi fi-brands-bitcoin", title: "Bitcoin", selected: true },
    { id: 2, val: "fi fi-brands-ethereum", title: "Ethereum", selected: false },
    {
      id: 3,
      val: "fi fi-br-litecoin-sign",
      title: "Litecoin",
      selected: false,
    },
  ];
  const formHandler = (nftId, formValues) => {
    const copiedItems = [...nft.nft];
    const index = copiedItems.findIndex((item) => item.id === nftId);
    const selectedItem = copiedItems[index];
    selectedItem.name = formValues.name;
    selectedItem.price = formValues.price;
    selectedItem.price_unit = formValues.price_unit;
    selectedItem.description = formValues.description;
    nft.setNft(copiedItems);
    upDisplayHandler(!upDdisplayProp);
  };
  return (
    <div
      className={`${
        upDdisplayProp ? "hidden" : "block"
      } fixed top-0 left-0 z-50 w-screen h-screen modal-bg-color 
        flex flex-row justify-center items-center content-center backdrop-blur-xl -pt-9`}
    >
      <div className="w-[430px] p-4 bg-modal-box rounded-md shadow-sm ">
        <NftManageTitles
          iconName="fi fi-br-refresh"
          innerText="Update Nft`s Informatoins"
        />
        <Formik
          className="relative"
          initialValues={nft.nft.filter((item) => item.id === nftId)[0]}
          onSubmit={(values) => formHandler(nftId, values)}
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
            <Button
              type="button"
              innerText="Cancel The Process"
              styleModel="outlined"
              clickEvent={() => upDisplayHandler(!upDdisplayProp)}
            />
            <Button type="submit" innerText="Submit Informations" />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ModalUpdate;

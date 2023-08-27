import { Form, Formik } from "formik";
import InputText from "../Common/Inputs/Inputs";
import SelectOption from "../Common/SelectOption/SelectOption";
import TextArea from "../Common/TextArea/TextArea";
import Button from "../Common/Button/Button";
const UserForm = ({ FormHandler, initValue }) => {
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
  return (
    <>
      <Formik
        className="relative"
        initialValues={initValue}
        onSubmit={(values) => FormHandler(values)}
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
export default UserForm;

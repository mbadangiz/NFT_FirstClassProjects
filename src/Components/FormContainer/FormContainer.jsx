import NftAddForm from "../NftAddForms/NftAddForms";
import NftManageTitles from "../NftManageTitles/NftManageTitles";
const FormContainer = () => {
  return (
    <div className="lg:w-[30%] lg:h-full  w-full px-5 pb-10 lg:px-0 relative">
      <NftManageTitles
        iconName="fi fi-sr-square-plus"
        innerText="Add New Nft"
      />
      <NftAddForm />
    </div>
  );
};

export default FormContainer;

import { Link } from "react-router-dom";
import NftAddForm from "../NftAddForms/NftAddForms";
import NftManageTitles from "../NftManageTitles/NftManageTitles";
const FormContainer = () => {
  return (
    <div className="lg:w-[30%] lg:h-full  w-full px-5 pb-10 lg:px-0 relative">
      <div className="mb-5">
        <Link to="/">
          <i className="fi fi-sr-angle-circle-left text-2xl f-oxa-reg relative top-1"></i>
          <span className="text-xl ml-4  f-oxa-reg">Back To HomePage </span>
        </Link>
      </div>
      <NftManageTitles
        iconName="fi fi-sr-square-plus"
        innerText="Add New Nft"
      />
      <NftAddForm />
    </div>
  );
};

export default FormContainer;

import FormContainer from "../FormContainer/FormContainer";
import NftList from "../NftList/NftList";

const ManageNfts = () => {
  return (
    <div
      className="max-w-7xl lg:h-[calc(100vh-36px)] mx-auto pt-9 
      flex flex-row items-start flex-wrap relative overflow-hidden"
    >
      <FormContainer />
      <NftList />
    </div>
  );
};

export default ManageNfts;

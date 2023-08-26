import UserForm from "../UserForm/UserForm";
import NftManageTitles from "../NftManageTitles/NftManageTitles";
import { useNft } from "../Provider/NftsProvider";

const ModalUpdate = ({ nftId, upDisplayHandler, upDdisplayProp }) => {
  const nft = useNft();
  return (
    <div
      className={`${
        upDdisplayProp ? "hidden" : "block"
      } fixed top-0 left-0 z-50 w-screen h-screen modal-bg-color 
        flex flex-row justify-center items-center content-center backdrop-blur-xl`}
    >
      <div className="w-[430px] p-4 bg-modal-box rounded-md shadow-sm ">
        <NftManageTitles
          iconName="fi fi-br-refresh"
          innerText="Update Nft`s Informatoins"
        />
        <UserForm />
      </div>
    </div>
  );
};

export default ModalUpdate;

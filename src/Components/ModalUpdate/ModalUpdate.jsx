import NftManageTitles from "../NftManageTitles/NftManageTitles";
const ModalUpdate = ({ nftId, upDisplayHandler, upDdisplayProp }) => {
  return (
    <div
      className={`${
        upDdisplayProp ? "hidden" : "block"
      } fixed top-0 left-0 z-50 w-screen h-screen modal-bg-color 
        flex flex-row justify-center items-center content-center backdrop-blur-xl`}
    >
      <div className="w-[430px] py-4  bg-modal-box rounded-md shadow-sm ">
        <NftManageTitles
          iconName="fi fi-sr-square-plus"
          innerText="Add New Nft"
        />
      </div>
    </div>
  );
};

export default ModalUpdate;

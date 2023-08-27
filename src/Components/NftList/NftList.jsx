import NftCardManagePartsContainer from "../NftCardManagePartsContainer/NftCardManagePartsContainer";
import NftManageTitles from "../NftManageTitles/NftManageTitles";

const NftList = () => {
  return (
    <div className="w-[70%] h-full  pl-11">
      <NftManageTitles
        iconName="fi fi-sr-rectangle-list"
        innerText="NFT List"
      />
      <NftCardManagePartsContainer />
    </div>
  );
};

export default NftList;

import NftCardsContainer from "../NftCardsContainer/NftCardsContainer";
import NftManageTitles from "../NftManageTitles/NftManageTitles";

const NftList = () => {
  return (
    <div className="w-[70%] h-full  pl-11">
      <NftManageTitles
        iconName="fi fi-sr-rectangle-list"
        innerText="NFT List"
      />
      <NftCardsContainer />
    </div>
  );
};

export default NftList;

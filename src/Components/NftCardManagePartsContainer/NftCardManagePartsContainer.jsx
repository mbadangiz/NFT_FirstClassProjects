import NftCardManagePart from "../NftCardManagePart/NftCardManagePart";
import { useNft } from "../Provider/NftsProvider";

const NftCardManagePartsContainer = () => {
  const nftObj = useNft();
  return (
    <div className="w-full h-[calc(100vh-96px)] space-y-6 overflow-y-auto pb-4 pr-5">
      {nftObj.nft.map((item) => {
        return <NftCardManagePart key={item.id} data={item} />;
      })}
    </div>
  );
};

export default NftCardManagePartsContainer;

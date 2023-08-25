import NftCard from "../NftCard/NftCard";
import { useNft } from "../Provider/NftsProvider";

const NftCardsContainer = () => {
  const nftObj = useNft();
  return (
    <div className="w-full h-[calc(100vh-96px)] space-y-9 overflow-y-auto pb-4 pr-5">
      {nftObj.nft.map((item) => {
        return <NftCard key={item.id} data={item} />;
      })}
    </div>
  );
};

export default NftCardsContainer;

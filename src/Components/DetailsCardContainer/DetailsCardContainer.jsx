import NftCardRecent from "../NftCardRecent/NftCardRecent";
import { useNft } from "./../Provider/NftsProvider";

const DetailsCardContainer = () => {
  const nft = useNft();
  const nfts = [...nft.nft];
  console.log(nfts.length - 3);
  return (
    <div className="w-full h-[calc(100vh-143px)] flex flex-row flex-wrap  justify-evenly overflow-y-scroll gap-y-10 pt-10">
      {nfts.map((item) => {
        return <NftCardRecent key={item.id} data={item} />;
      })}
    </div>
  );
};

export default DetailsCardContainer;

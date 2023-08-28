import NftCardRecent from "../NftCardRecent/NftCardRecent";
import { useNft } from "./../Provider/NftsProvider";

const DetailsCardContainer = () => {
  const nft = useNft();
  const nfts = [...nft.nft];
  console.log(nfts.length - 3);
  return (
    <div className="w-full flex flex-row flex-wrap  justify-evenly overflow-auto">
      {nfts.map((item) => {
        return <NftCardRecent key={item.id} data={item} />;
      })}
    </div>
  );
};

export default DetailsCardContainer;

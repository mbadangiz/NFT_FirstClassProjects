import NftCardRecent from "../NftCardRecent/NftCardRecent";
import { useNft } from "./../Provider/NftsProvider";

const DetailsCardContainer = () => {
  const nft = useNft();
  const nfts = [...nft.nft];
  console.log(nfts.length - 3);
  return (
    <div className="w-full flex flex-row flex-wrap  justify-between overflow-auto">
      {nfts.slice(nfts.length - 3, 3).map((item) => {
        return <NftCardRecent key={item.id} data={item} />;
      })}
    </div>
  );
};

export default DetailsCardContainer;

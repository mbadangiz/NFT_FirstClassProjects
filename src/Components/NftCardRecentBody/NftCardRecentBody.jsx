import { useState } from "react";
import { useNft } from "../Provider/NftsProvider";

const NftCardRecentBody = ({ data }) => {
  const [isUserLiked, setIsUserLiked] = useState(false);

  const {
    id,
    name,
    price,
    price_unit,
    description,
    like,
    authorName,
    authorId,
  } = data;
  const nft = useNft();

  const likeHandler = (id) => {
    const copiedItems = [...nft.nft];
    const index = copiedItems.findIndex((item) => item.id === id);
    const selectedItem = copiedItems[index];

    if (isUserLiked) {
      selectedItem.like--;
    } else {
      selectedItem.like++;
    }
    nft.setNft(copiedItems);
    setIsUserLiked(!isUserLiked);
  };

  return (
    <div className="w-full mt-4 select-none ">
      <div className="w-full flex justify-between">
        <div className="w-4/5 flex flex-row justify-between items-center content-center">
          <div className="w-1/5">
            <img
              src="./Img/Avatar.jpg"
              className="rounded-full w-full"
              alt=""
            />
          </div>
          <div className="w-4/5 pl-2 space-y-2">
            <h2 className="font-bold">{authorName}</h2>
            <h2 className="font-thin text-sm">{authorId}</h2>
          </div>
        </div>
        <div>
          <span
            className={`${
              isUserLiked && "text-rose-600 opacity-100  "
            } opacity-60 hover:opacity-90 cursor-pointer transition-all duration-100 `}
            onClick={() => likeHandler(id)}
          >
            <i className="fi fi-sr-heart relative top-[3px]"></i>
            <span className="f-oxa-reg font-thin ml-3">{like}</span>
          </span>
        </div>
      </div>
      <div className="w-full mt-10  f-oxa-reg text-xl">
        Price : {price}
        <i className={`${price_unit} relative top-[3px] text-xl ml-2`}></i>
      </div>
    </div>
  );
};

export default NftCardRecentBody;

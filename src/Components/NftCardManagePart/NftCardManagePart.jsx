import { useState } from "react";
import ModalDelete from "../ModalDelete/ModalDelete";
import ModalUpdate from "../ModalUpdate/ModalUpdate";
import { useNft } from "../Provider/NftsProvider";

const NftCardManagePart = ({ data }) => {
  const [isHidden, setIsHidden] = useState(true);

  const [isHiddenUpdateModal, setisHiddenUpdateModal] = useState(true);
  const nft = useNft();

  const { id, name, img, price, price_unit, description } = data;

  const cardDeleteHander = (id) => {
    const copiedNft = [...nft.nft];
    const filteredItems = copiedNft.filter((item) => item.id !== id);
    nft.setNft(filteredItems);
    setIsHidden(!isHidden);
  };

  return (
    <>
      <ModalUpdate
        nftId={id}
        upDdisplayProp={isHiddenUpdateModal}
        upDisplayHandler={setisHiddenUpdateModal}
      />
      <ModalDelete
        onDelHandler={() => cardDeleteHander(id)}
        displayHandler={() => setIsHidden(!isHidden)}
        displayProp={isHidden}
      />
      <div
        className="w-full h-28 bg-white/10 backdrop-blur-2xl 
        nft-card-border border-[2.5px] border-solid rounded-xl
        flex flex-row content-center items-center relative z-20 justify-between 
        px-4 hover:bg-white/20 transition-all duration-300 NftCardManagePart"
      >
        <div className="flex flex-row h-full w-4/5 gap-x-4">
          <div className="h-full  py-[6px]">
            <img
              src={`./../Img/${img}`}
              className="w-full h-full rounded"
              alt="bored-ape"
            />
          </div>
          <div className="h-full flex flex-col justify-between content-start items-start py-[4px] ">
            <p className="font-bold text-lg">{name}</p>
            <p className="text-sm w-60 truncate">{description}</p>
            <div className="text-right f-oxa-semibold">
              <span className="text-base">Price : {price} </span>
              <i className={`${price_unit} text-lg relative top-1 ml-2`}></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full pt-[6px] pb-[12px]">
          <div className="space-x-4 pt-1 text-right">
            <i
              className="fi fi-sr-trash-xmark text-white/60 text-lg hover:text-white/90 cursor-pointer"
              onClick={() => setIsHidden(!isHidden)}
            ></i>
            <i
              className="i fi-sr-edit text-white/60 text-lg hover:text-white/90 cursor-pointer "
              onClick={() => setisHiddenUpdateModal(!isHiddenUpdateModal)}
            ></i>
          </div>
          <div className="text-right text-xs text-white/75">16 Aguest,2016</div>
        </div>
      </div>
    </>
  );
};

export default NftCardManagePart;

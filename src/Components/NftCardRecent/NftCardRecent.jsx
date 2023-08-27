import NftCardRecentBody from "../NftCardRecentBody/NftCardRecentBody";

const NftCardRecent = ({ data }) => {
  return (
    <div className="w-[360px] h-max bg-modal-box py-4 px-6">
      <div className="w-full mx-auto">
        <img className="w-full" src={`./Img/${data.img}`} alt="boredApe" />
      </div>
      <NftCardRecentBody data={data} />
    </div>
  );
};

export default NftCardRecent;

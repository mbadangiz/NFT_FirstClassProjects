const NftManageTitles = ({ iconName, innerText }) => {
  return (
    <div className="flex flex-row items-center content-center gap-x-3 mb-6">
      <i className={`${iconName} text-2xl`}></i>
      <p className="Manage-titles">{innerText}</p>
    </div>
  );
};

export default NftManageTitles;
//

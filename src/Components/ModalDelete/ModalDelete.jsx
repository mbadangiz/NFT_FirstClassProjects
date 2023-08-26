import Button from "../Common/Button/Button";

const ModalDelete = ({ displayHandler, displayProp, onDelHandler }) => {
  return (
    <div
      className={`${
        displayProp ? "hidden" : "block"
      } fixed top-0 left-0 z-50 w-screen h-screen modal-bg-color 
        flex flex-row justify-center items-center content-center backdrop-blur-xl -pt-9`}
    >
      <div className="w-[400px] h-64 bg-modal-box rounded-md shadow-sm text-center py-4 space-y-4">
        <i className="fi fi-sr-delete-document text-7xl text-white/80"></i>
        <p className="f-oxa-reg ">Are you sure about deleting this item?</p>
        <div className="flex items-center content-center justify-around">
          <div className="w-24 h-11 mx-auto">
            <Button innerText="No" clickEvent={displayHandler} />
          </div>
          <div className="w-24 h-11 mx-auto">
            <Button
              innerText="Yes"
              styleModel="outlined"
              clickEvent={onDelHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;

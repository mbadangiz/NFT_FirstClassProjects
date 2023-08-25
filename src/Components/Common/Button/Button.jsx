const Button = ({ type, innerText, styleModel, clickEvent }) => {
  return (
    <button
      className={` ${
        styleModel === "outlined"
          ? "bg-gray-200/10 border-[1.5px] border-amber-300 border-solid"
          : "color-bg btn-color-bg"
      } w-full h-11 outline-none`}
      type={type}
      onClick={clickEvent}
    >
      {innerText}
    </button>
  );
};

export default Button;

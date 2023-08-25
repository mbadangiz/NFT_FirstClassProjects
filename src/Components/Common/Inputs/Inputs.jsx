import { Field } from "formik";

const InputText = ({ inputType, placeholder, name }) => {
  return (
    <div
      className={`
      ${
        inputType === "text" ? "w-full" : "w-[30%]"
      } h-11 relative overflow-hidden `}
    >
      <Field
        className="inputs-common-rules"
        placeholder={placeholder}
        type={inputType}
        name={name}
      />
    </div>
  );
};

export default InputText;

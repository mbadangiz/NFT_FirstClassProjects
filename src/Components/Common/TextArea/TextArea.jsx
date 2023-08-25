import { Field } from "formik";

const TextArea = ({ textAreaName, placeholder }) => {
  return (
    <div className="w-full h-32 relative overflow-hidden ">
      <Field
        as="textarea"
        className="inputs-common-rules resize-none"
        name={textAreaName}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextArea;

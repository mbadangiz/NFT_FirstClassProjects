import { Field } from "formik";

const SelectOption = ({ Options, name }) => {
  return (
    <Field
      className="w-[65%] select-general-rules outline-none"
      name={name}
      as="select"
    >
      {Options.map((item) => {
        return (
          <option value={item.val} key={item.id}>
            {item.title}
          </option>
        );
      })}
    </Field>
  );
};

export default SelectOption;

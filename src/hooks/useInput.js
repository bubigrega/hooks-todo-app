import { useState } from "react";

export default (initValue, label) => {
  const [value, setValue] = useState(initValue);

  const onChange = e => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return [{ label, value, onChange }, reset];
};

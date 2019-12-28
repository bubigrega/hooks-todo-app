import { useState } from "react";

export default initState => {
  const [state, setState] = useState(initState);

  const updateState = () => {
    setState(!state);
  };

  return [state, updateState];
};

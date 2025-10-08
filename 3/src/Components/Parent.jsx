import PropTypes from "prop-types";
import Child from "../Child.jsx";
import { useMemo } from "react";

function Parent({ message }) {
  
  const parentMessage = useMemo(() => message.toUpperCase(), [message]);

  return (
    <div>
      <h2>hi parent component</h2>
      <Child message={parentMessage} />
    </div>
  );
}

Parent.propTypes = {
  message: PropTypes.string,
};

export default Parent;

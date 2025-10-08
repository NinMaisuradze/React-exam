import PropTypes from "prop-types";

function Child({ message }) {
  if (!message) {
    return (
      <div>
        <h3>child component</h3>
        <p>No message received.</p>
      </div>
    );
  }
  return (
    <div>
      <h3>child component</h3>
      <p>{message}</p>
    </div>
  );
}

Child.propTypes = {
  message: PropTypes.string,
};

export default Child;

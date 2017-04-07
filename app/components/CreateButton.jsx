import React, { PropTypes } from 'react';

const propTypes = {
  onClick: PropTypes.func.isRequired
};
function CreateButton({ onClick }) {
  return (
    <div className="createButtonComponent">
      <button onClick={() => { onClick(); }}>Create New Todo</button>
    </div>
  );
}

CreateButton.propTypes = propTypes;

export default CreateButton;

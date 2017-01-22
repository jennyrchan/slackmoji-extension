import React from 'react';

function FilterInput (props) {

  const handleChange = props.handleChange;
  const inputValue = props.inputValue;

  return (
    <form className="form-group">
      <input
        onChange={handleChange}
        value={inputValue}
        className="form-control"
        placeholder="Search"
      />
    </form>
  );

}

export default FilterInput;

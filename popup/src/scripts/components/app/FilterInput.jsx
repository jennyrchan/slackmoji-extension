import React from 'react';

function FilterInput (props) {

  const { handleChange, inputValue } = props;

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

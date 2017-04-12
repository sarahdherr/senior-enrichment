import React from 'react';

const FilterInput = (props) => {

  // sends text input to <StudentsContainer />
  const handleChange = props.handleChange;
  const inputValue = props.inputValue;

  return (
    <form className='form-group' style={{marginTop: '1%', marginLeft: '10%', marginRight: '13%'}}>
      <input
        onChange={handleChange}
        value={inputValue}
        className='form-control'
        placeholder="Enter student name"
      />
    </form>
  )
}

export default FilterInput;

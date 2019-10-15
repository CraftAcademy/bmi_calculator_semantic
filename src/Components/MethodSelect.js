import React from 'react'

const MethodSelect = (props) => {
  return (
    <div>
      <select name="method" onChange={props.onChangeHandler}>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>     
    </div>
  )
}

export default MethodSelect;

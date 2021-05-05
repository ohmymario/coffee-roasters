import React from 'react';
import SelectionStyles from './SelectionStyles';

const Selection = props => {
  const {
    name,
    question,
    index,
    selected,
    toggleTab,
    disabled = false,
  } = props;
  return (
    <SelectionStyles disabled={disabled} selected={selected}>
      <button
        title={disabled ? 'No grind options for capsules' : question}
        disabled={disabled}
        type="button"
        onClick={() => toggleTab(name)}
      >
        <h4 className="selection-num">{`0${index + 1}`}</h4>
        <h4 className="selection-name">{name}</h4>
      </button>
    </SelectionStyles>
  );
};

export default Selection;

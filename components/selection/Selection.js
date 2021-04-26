import React from 'react';
import SelectionStyles from './SelectionStyles';

// there is a selection in the tab then grey out - DONE
// clickable - open the tab - DONE
// 'hook' up to each question and keep in state located in questionContainer - DONE
// if selected capsule - disable the grind selection - DONE

const Selection = props => {
  const {
    name,
    index,
    selected,
    toggleTab,
    disabled = false,
  } = props;
  console.log(disabled);
  return (
    <SelectionStyles disabled={disabled} selected={selected}>
      <button
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

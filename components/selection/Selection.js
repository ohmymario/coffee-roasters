import React from 'react';
import SelectionStyles from './SelectionStyles';

// there is a selection in the tab then grey out
// clickable - open the tab
// 'hook' up to each question and keep in state located in questionContainer
// if selected capsule - disable the grind selection

const Selection = props => {
  const { name, index, selected, setTab } = props;
  return (
    <SelectionStyles selected={selected} onClick={() => setTab(name)}>
      <h4 className="selection-num">{`0${index + 1}`}</h4>
      <h4 className="selection-name">{name}</h4>
    </SelectionStyles>
  );
};

export default Selection;

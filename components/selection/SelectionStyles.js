import styled from 'styled-components';

const SelectionStyles = styled.div`
  display: flex;
  min-width: 255px;
  padding: 1.5em 0 1.5em 0;
  opacity: ${props => props.selected && '40%'};
  border-bottom: 1px solid var(--greyOpacity)};
  :last-child{
    border-bottom: none;
  }
  :hover {
    filter: brightness(60%);
  }

  .selection-num {
    margin-right: 28.5px;
    color: ${props => (props.selected ? 'var(--darkCyan)' : ' var(--grey)')};
  }
  .selection-name {
    color: var(--darkGreyBlue);
  }

`;

export default SelectionStyles;

import styled from 'styled-components';

const SelectionStyles = styled.div`
  min-width: 255px;
  padding: 1.5em 0 1.5em 0;
  opacity: ${props => (props.selected || props.disabled ? '40%' : '')};
  border-bottom: 1px solid var(--greyOpacity);
  :last-child {
    border-bottom: none;
  }
  :hover {
    filter: ${props =>
      props.disabled ? 'brightness(100%)' : 'brightness(60%);'};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    display: flex;
    &[disabled] {
      cursor: not-allowed;
    }

    .selection-num {
      margin-right: 28.5px;
      color: ${props => (props.selected ? 'var(--darkCyan)' : ' var(--grey)')};
    }
    .selection-name {
      color: var(--darkGreyBlue);
    }
  }
`;

export default SelectionStyles;

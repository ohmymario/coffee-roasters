import styled from 'styled-components';

// img 520 x 445
// txt 450 x 340
// space between ~ 125px

// total 1110 x 520
// --darkGreyBlue: #333D4B;
// 85px padding
// take in props - alt, flip

const CommitmentStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 85px 0 85px;
  .commit-image {
    img {
      border-radius: 8px;
    }
  }
  .commit-message {
    max-width: 450px;
    h2,
    p {
      color: var(--darkGreyBlue);
    }
  }
`;

export default CommitmentStyles;

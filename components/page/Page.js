import styled from 'styled-components';
import { GlobalStyles } from './PageStyles';
import Header from '../header/Header';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 1.5rem;
`;

const Page = props => {
  const { children } = props;
  return (
    <>
      <GlobalStyles />
      <InnerStyles>
        <Header />
        {children}
      </InnerStyles>
    </>
  );
};

export default Page;

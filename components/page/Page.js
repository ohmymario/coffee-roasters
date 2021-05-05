import styled from 'styled-components';
import { GlobalStyles } from './PageStyles';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 2rem;
  }
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
        <Footer />
      </InnerStyles>
    </>
  );
};

export default Page;

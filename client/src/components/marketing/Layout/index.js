import Header from '../Navigation/header';
import Footer from '../Navigation/footer';
import Headroom from 'react-headroom';

const Layout = ({ children }) => {
  return (
    <>
   
      <Headroom>
        <Header />
      </Headroom>

      <div></div>
      <Footer />
    </>
  );
};

export default Layout;

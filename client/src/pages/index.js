import LoginSignup from '../screens/App/Auth';
import Header from '../components/marketing/Navigation/header';
import Headroom from 'react-headroom';
import Footer from '../components/marketing/Navigation/footer';

export default function Home() {
  return (
  <>
    <Headroom>
      <Header />
    </Headroom>

    <LoginSignup />

    <Footer />
  </>
  );
}

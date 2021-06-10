import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setPath } from '../redux/AC';
import { useRouteMatch } from 'react-router-dom';
import { PromoHeaderContent } from '../components/PromoHeaderContent';
import { Jumbotron } from '../components/Jumbotron';
import { Accordion } from '../components/Accordion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import * as ROUTES from '../constants/ROUTES';
import { Link } from 'react-router-dom';
import { CTA } from '../components/CTA';

const promoFooterContent = {
  title: 'Questions? Call',
  phoneNumber: '8-800-100-9668',
  links: [
    ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test'],
    ['Help Center', 'Jobs', 'Cookie Preferences', 'Legal Notices'],
    ['Account', 'Ways to Watch', 'Corporate Information', 'Netflix Originals'],
    ['Media Center', 'Terms of Use', 'Contact Us'],
  ],
  copy: 'Netflix Russia',
};

const Promo = ({ setPath }) => {
  const { path } = useRouteMatch();
  useEffect(() => {
    setPath(path);
  }, [path]);
  return (
    <>
      <Header
        navigation={
          <Link className="button" to={ROUTES.SIGNIN}>
            Sign In
          </Link>
        }>
        <PromoHeaderContent />
      </Header>
      <Jumbotron />
      <Accordion>
        <CTA />
      </Accordion>
      <Footer content={promoFooterContent} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPath: (path) => dispatch(setPath(path)),
});

export default connect(null, mapDispatchToProps)(Promo);

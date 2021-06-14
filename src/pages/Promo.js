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

const Promo = () => {
  return (
    <>
      <Header
        bg={
          <img
            aria-hidden
            src="/images/misc/home-bg-small.jpg"
            srcSet="/images/misc/home-bg-small.jpg 1000w, 
        /images/misc/home-bg-medium.jpg 1500w, 
        /images/misc/home-bg-large.jpg 1800w"
            alt=""
          />
        }
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

export default Promo;

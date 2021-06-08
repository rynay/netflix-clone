import { Header } from '../../components/Header';
import { Jumbotron } from '../../components/Jumbotron';
import { Accordion } from '../../components/Accordion';
import { Footer } from '../../components/Footer';
import { PromoContent } from './PromoContent';

export const Promo = () => {
  return (
    <>
      <Header>
        <PromoContent />
      </Header>
      <Jumbotron />
      <Accordion />
      <Footer />
    </>
  );
};

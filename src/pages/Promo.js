import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setPath } from '../redux/AC';
import { useRouteMatch } from 'react-router-dom';
import { PromoHeaderContent } from '../components/PromoHeaderContent';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import * as ROUTES from '../constants/ROUTES';
import { Link } from 'react-router-dom';

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
      <main></main>
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPath: (path) => dispatch(setPath(path)),
});

export default connect(null, mapDispatchToProps)(Promo);

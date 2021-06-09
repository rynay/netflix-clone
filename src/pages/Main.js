import { connect } from 'react-redux';
import { useEffect } from 'react';
import { setPath } from '../redux/AC';
import { useRouteMatch } from 'react-router-dom';
import { MainHeaderContent } from '../components/MainHeaderContent';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const Main = ({ setPath }) => {
  const { path } = useRouteMatch();
  useEffect(() => {
    setPath(path);
  }, [path]);
  return (
    <>
      <Header navigation={<div>TODO</div>}>
        <MainHeaderContent />
      </Header>
      <main></main>
      <Footer />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPath: (path) => dispatch(setPath(path)),
});

export default connect(null, mapDispatchToProps)(Main);

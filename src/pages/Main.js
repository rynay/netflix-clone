import { connect } from 'react-redux';
import { useLayoutEffect } from 'react';
import { setPath } from '../redux/AC';
import { useRouteMatch } from 'react-router-dom';
import { MainHeaderContent } from '../components/MainHeaderContent';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WatcherChoosing } from '../components/WatcherChoosing';

const mainFooterContent = {
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

const Main = ({ setPath, currentWatcher, user }) => {
  const { path } = useRouteMatch();
  useLayoutEffect(() => {
    setPath(path);
  }, [path]);
  return (
    <>
      {currentWatcher && (
        <>
          <Header
            bg={<img aria-hidden src="/images/misc/joker1.jpg" alt="" />}
            navigation={<div>TODO</div>}>
            <MainHeaderContent />
          </Header>
          <main></main>
          <Footer content={mainFooterContent} />
        </>
      )}
      {!currentWatcher && (
        <>
          <Header>
            <WatcherChoosing />
          </Header>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  currentWatcher: state.currentWatcher,
});
const mapDispatchToProps = (dispatch) => ({
  setPath: (path) => dispatch(setPath(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

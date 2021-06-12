import { MainHeaderContent } from '../components/MainHeaderContent';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WatcherChoosing } from '../components/WatcherChoosing';
import { connect } from 'react-redux';

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

const Main = ({ currentWatcher }) => {
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
  currentWatcher: state.currentWatcher,
});

export default connect(mapStateToProps)(Main);

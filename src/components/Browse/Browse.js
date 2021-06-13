import { connect } from 'react-redux';
import { MainHeaderContent } from '../MainHeaderContent';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MainHeaderNavigation } from '../MainHeaderNavigation';
import { Switch, Route } from 'react-router-dom';
import { MainContent } from '../MainContent';

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
const Browse = ({ data, openModal, isModalOpen }) => {
  return (
    <>
      <Header
        bg={<img aria-hidden src="/images/misc/joker1.jpg" alt="" />}
        navigation={<MainHeaderNavigation />}>
        <MainHeaderContent />
      </Header>
      <main>
        <Switch>
          <Route exact path="/browse">
            <MainContent
              isModalOpen={isModalOpen}
              openModal={openModal}
              type="series"
              content={data.series}
            />
          </Route>
          <Route path="/browse/films">
            <MainContent
              isModalOpen={isModalOpen}
              openModal={openModal}
              type="films"
              content={data.films}
            />
          </Route>
          <Route path="/browse/series">
            <MainContent
              isModalOpen={isModalOpen}
              openModal={openModal}
              type="series"
              content={data.series}
            />
          </Route>
        </Switch>
      </main>
      <Footer content={mainFooterContent} />
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Browse);

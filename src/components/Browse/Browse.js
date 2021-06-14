import { connect } from 'react-redux';
import { MainHeaderContent } from '../MainHeaderContent';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { MainHeaderNavigation } from '../MainHeaderNavigation';
import { Switch, Route } from 'react-router-dom';
import { MainContent } from '../MainContent';
import * as AC from '../../redux/AC';

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
const Browse = ({
  formattedData,
  openModal,
  isModalOpen,
  filteredData,
  filterData,
}) => {
  const search = (query) => {
    if (!query) {
      filterData();
      return;
    }
    filterData(query);
  };
  return (
    <>
      <Header
        bg={<img aria-hidden src="/images/misc/joker1.jpg" alt="" />}
        navigation={<MainHeaderNavigation search={search} />}>
        <MainHeaderContent openModal={openModal} />
      </Header>
      <main className="browse-main">
        <Switch>
          <Route exact path="/browse">
            {filteredData &&
              filteredData.films &&
              filteredData.series &&
              Object.keys(filteredData.films).filter(
                (key) => filteredData.films[key].length > 0
              ).length === 0 &&
              Object.keys(filteredData.series).filter(
                (key) => filteredData.series[key].length > 0
              ).length === 0 && (
                <h2 className="browse__warning">No Results Found</h2>
              )}
            <MainContent
              isModalOpen={isModalOpen}
              openModal={openModal}
              type="films"
              content={filteredData?.films || formattedData.films}
            />
            <MainContent
              isModalOpen={isModalOpen}
              openModal={openModal}
              type="series"
              content={filteredData?.series || formattedData.series}
            />
          </Route>
          <Route path="/browse/films">
            {filteredData &&
              filteredData.films &&
              Object.keys(filteredData.films).filter(
                (key) => filteredData.films[key].length > 0
              ).length === 0 && (
                <h2 className="browse__warning">No Results Found</h2>
              )}
            <MainContent
              isModalOpen={isModalOpen}
              openModal={openModal}
              type="films"
              content={filteredData?.films || formattedData.films}
            />
          </Route>
          <Route path="/browse/series">
            {filteredData &&
              filteredData.series &&
              Object.keys(filteredData.series).filter(
                (key) => filteredData.series[key].length > 0
              ).length === 0 && (
                <h2 className="browse__warning">No Results Found</h2>
              )}
            <MainContent
              isModalOpen={isModalOpen}
              openModal={openModal}
              type="series"
              content={filteredData?.series || formattedData.series}
            />
          </Route>
        </Switch>
      </main>
      <Footer content={mainFooterContent} />
    </>
  );
};

const mapStateToProps = (state) => ({
  formattedData: state.formattedData,
  filteredData: state.filteredData,
});
const mapDispatchToProps = (dispatch) => ({
  filterData: (query) => dispatch(AC.filterData(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);

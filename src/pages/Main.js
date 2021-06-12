import { Header } from '../components/Header';
import { WatcherChoosing } from '../components/WatcherChoosing';
import { connect } from 'react-redux';
import { Browse } from '../components/Browse';
import { Spinner } from '../components/Spinner';

const Main = ({ currentWatcher, data }) => {
  return (
    <>
      {currentWatcher && (!data.films || !data.series) && <Spinner />}
      {currentWatcher && data.films && data.series && <Browse />}
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
  data: state.data,
});

export default connect(mapStateToProps)(Main);

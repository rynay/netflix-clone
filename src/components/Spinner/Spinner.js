import { connect } from 'react-redux';
import { Header } from '../Header';

const Spinner = ({ currentWatcher }) => {
  return (
    <Header>
      <div className="spinner">
        <img
          className="spinner__loading"
          src="/images/misc/spinner.png"
          alt="Loading"
        />
        <img
          className="spinner__image"
          src={currentWatcher.photoURL}
          alt={currentWatcher.displayName}
        />
      </div>
    </Header>
  );
};

const mapStateToProps = (state) => ({
  currentWatcher: state.currentWatcher,
});

export default connect(mapStateToProps)(Spinner);

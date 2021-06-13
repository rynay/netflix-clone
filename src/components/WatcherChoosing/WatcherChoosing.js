import { connect } from 'react-redux';
import * as AC from '../../redux/AC';

const WatcherChoosing = ({ setCurrentWatcher, user }) => {
  return (
    <section className="watcherChoosing">
      <h1 className="watcherChoosing__title">Who's watching?</h1>
      <div className="watcherChoosing__usersContainer">
        <button
          className="watcherChoosing__user"
          onClick={() => setCurrentWatcher(user)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              return setCurrentWatcher(user);
            }
          }}>
          <img src={user.photoURL} alt="" />
          <div>{user.displayName}</div>
        </button>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  user: state?.user || {},
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentWatcher: (user) => dispatch(AC.setCurrentWatcher(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WatcherChoosing);

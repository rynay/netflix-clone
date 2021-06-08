import { connect } from 'react-redux';
import * as AC from '../../redux/AC';

const Header = ({ children, signIn, signUp, logout }) => {
  return <header>{children}</header>;
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (data) => dispatch(AC.signIn(data)),
  signUp: (data) => dispatch(AC.signUp(data)),
  logout: () => dispatch(AC.logout),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

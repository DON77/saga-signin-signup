import { connect } from 'react-redux';

import { signUp } from '../actions';
import SignUp from './SignUp';

// eslint-disable-next-line no-unused-vars
import { UserData } from '../types';

const mapStateToProps = (state: { user: UserData }) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Function) => ({
  signUp: (userDetails: UserData) => dispatch(signUp(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

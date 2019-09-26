import { connect } from 'react-redux';

import { signIn } from '../actions';
import SignIn from './SignIn';

// eslint-disable-next-line no-unused-vars
import { UserData } from '../types';

const mapStateToProps = (state: { user: UserData }) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Function) => ({
  signIn: (userDetails: UserData) => dispatch(signIn(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

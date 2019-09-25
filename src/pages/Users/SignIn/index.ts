import { connect } from 'react-redux';

import { signIn } from '../actions';
import SignIn from './SignIn';

type UserData = { email: string, password: string };

const mapDispatchToProps = (dispatch: Function) => ({
  signIn: (userDetails: UserData) => dispatch(signIn(userDetails)),
});

export default connect(null, mapDispatchToProps)(SignIn);

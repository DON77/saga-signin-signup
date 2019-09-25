import { connect } from 'react-redux';

import { signUp } from '../actions';
import SignUp from './SignUp';

type UserData = { email: string, password: string };

const mapDispatchToProps = (dispatch: Function) => ({
  signUp: (userDetails: UserData) => dispatch(signUp(userDetails)),
});

export default connect(null, mapDispatchToProps)(SignUp);

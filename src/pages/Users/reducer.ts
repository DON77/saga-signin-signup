import {
  SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
} from './constants';

const initialState = {};

export default (state = initialState, action: any): any => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  PREDICT_START,
  PREDICT_SUCCESS,
  PREDICT_FAILURE,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../constants';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        errorMessage: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        errorMessage: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        errorMessage: action.payload,
      };
    case LOGOUT_START:
      return {
        ...state,
        isLoggingOut: true,
        errorMessage: '',
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        errorMessage: '',
      };
    case REGISTER_START:
      return {
        ...state,
        isRegistering: true,
        errorMessage: '',
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        errorMessage: '',
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        errorMessage: action.payload,
      };
    case PREDICT_START:
      return {
        ...state,
        isPredicting: true,
        errorMessage: '',
      };
    case PREDICT_SUCCESS:
      return {
        ...state,
        isPredicting: false,
        errorMessage: '',
        prediction: action.payload,
      };
    case PREDICT_FAILURE:
      return {
        ...state,
        isPredicting: false,
        errorMessage: action.payload,
      };
    case DELETE_USER_START:
      return {
        ...state,
        isDeleting: true,
        errorMessage: '',
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        errorMessage: '',
      };
    case DELETE_USER_FAILURE:
      return {
        ...state,
        isDeleting: false,
        errorMessage: action.payload,
      };
    case UPDATE_USER_START:
      return {
        ...state,
        isUpdating: true,
        errorMessage: '',
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        errorMessage: '',
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isUpdating: false,
        errorMessage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

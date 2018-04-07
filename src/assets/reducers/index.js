import history from '../history';
import { TOGGLE_SIDEBAR, LOGOUT } from '../constants/ActionTypes';

const initialState = {
  collapsed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, collapsed: action.collapsed };
    case LOGOUT:
      if (action.payload) {
        history.push('/user/login');
      }
      return state;
    default:
      return state;
  }
}

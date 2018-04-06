import history from '../history';

const initialState = {
  collapsed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, collapsed : action.collapsed}
    case 'LOGOUT':
      return history.push('/user/login')
    default:
      return state;
  }
}

import * as types from '../constants/ActionTypes';

export const toggleSidebar = collapsed => ({
  type: types.TOGGLE_SIDEBAR,
  collapsed
});

export function logout(dispatch) {
  return new Promise(resolve => {
    dispatch({ type: types.LOGOUT });
    return fetch('/api/user/logout', { method: 'POST' }).then(res =>
      resolve({
        type: types.LOGOUT,
        payload: res.json()
      })
    );
  });
}
